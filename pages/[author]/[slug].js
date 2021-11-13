import prisma from '@lib/prisma';
import Layout from '@components/layouts/Layout';
import Head from 'next/head';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import { compileMdx } from '@lib/mdxBundler';
import MDXComponents from '@components/editor/MDXComponents';

export default function Publication({
  title,
  code,
  frontmatter,
  createdAt,
  updatedAt,
  author,
}) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Head>
        <title>{`${author.username} — ${title}`}</title>
      </Head>

      <article className="prose break-words bg-gray-100 dark:bg-gray-900 max-w-none dark:prose-dark">
        <div className="container">
          <Component components={MDXComponents} />
        </div>
      </article>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const authorUsername = params.author;
  const { slug } = params;

  const post = await prisma.post.findUnique({
    where: {
      authorUsername_slug: { authorUsername, slug },
    },
    select: {
      title: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      author: {
        select: {
          username: true,
          image: true,
        },
      },
    },
  });

  post.createdAt = String(post.createdAt);
  post.updatedAt = String(post.updatedAt);

  const { code, frontmatter } = await compileMdx(post.content);

  post.code = code;
  post.frontmatter = frontmatter;

  return {
    props: post,
  };
};

Publication.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
