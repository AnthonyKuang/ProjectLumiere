import Layout from '@components/layouts/Layout';
import Draft from '@components/ui/Draft';
import Head from 'next/head';
import prisma from '@lib/prisma';
import { getSession, useSession, signIn } from 'next-auth/react';
import { FaRegFile } from 'react-icons/fa';

export default function Drafts({ drafts }) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === 'loading') return null;

  return (
    <>
      <Head>
        <title>My Drafts</title>
      </Head>

      <>
        <h1 className="mb-5 heading-primary">My Drafts</h1>
        {drafts.length === 0 ? (
          <section className="flex flex-col items-center justify-center w-full h-full p-5 border border-gray-700 rounded-xl">
            <FaRegFile className="w-8 h-8 mb-5 text-gray-500" />
            <h2 className="text-xl font-bold">No drafts were found.</h2>
            <p>
              Go ahead and create a publication! Saved drafts can be found here
              after you create and save an unpublished publication.
            </p>
          </section>
        ) : (
          <section className="space-y-5">
            {drafts.map((draft) => (
              <Draft post={draft} key={draft.id} />
            ))}
          </section>
        )}
      </>
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { username: session.user.username },
      published: false,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  drafts.forEach((draft) => {
    draft.createdAt = String(draft.createdAt);
    draft.updatedAt = String(draft.updatedAt);
  });

  return {
    props: { drafts },
  };
};

Drafts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
