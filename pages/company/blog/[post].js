import { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@components/layouts/Layout';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllSlugs, getPostBySlug } from '@lib/mdxBundler';

export default function Post({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className="mb-12">
        <div className="w-full text-center border-b border-gray-500">
          <p className="text-base text-gray-400">
            Published {frontmatter.date}
          </p>
          <h1 className="mb-4">{frontmatter.title}</h1>
        </div>
      </div>
      <article className="container prose break-words bg-gray-100 dark:bg-gray-900 max-w-none dark:prose-dark">
        <Component />
      </article>
      <Link href="/company/blog" passHref>
        <p className="inline-block mt-8 text-purple-400 hover:cursor-pointer">
          ← Back to Blog page
        </p>
      </Link>
    </>
  );
}

export const getStaticPaths = async () => {
  const slugs = await getAllSlugs(['company', 'blog']);

  return {
    paths: slugs.map((slug) => ({
      params: {
        post: slug.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { code, frontmatter } = await getPostBySlug(
    ['company', 'blog'],
    params.post
  );

  return {
    props: {
      code,
      frontmatter,
    },
  };
};

Post.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
