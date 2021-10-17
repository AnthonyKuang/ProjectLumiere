import prisma from '@lib/prisma';
import { getSession, useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MDXEditor from '@components/editor/MDXEditor';
import Head from 'next/head';
import Header from '@components/layouts/Header';

export default function Draft(props) {
  const { title } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState(props.content);
  const { slug } = props;
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  const saveDraft = async () => {
    try {
      const body = { content, slug };
      await fetch('/api/post/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await router.push('/me/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  if (status === 'loading') return null;

  return (
    <>
      <Head>
        <title>[Draft] {title}</title>
      </Head>
      <Header
        pageType="editor"
        title={title}
        content={content}
        setContent={setContent}
        saveDraft={saveDraft}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <MDXEditor
        content={content}
        setContent={setContent}
        collapsed={collapsed}
      />
    </>
  );
}

export const getServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });
  const authorUsername = session.user.username;
  const { slug } = params;

  const post = await prisma.post.findUnique({
    where: {
      authorUsername_slug: { authorUsername, slug },
    },
    select: {
      title: true,
      slug: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  post.createdAt = String(post.createdAt);
  post.updatedAt = String(post.updatedAt);

  return {
    props: post,
  };
};
