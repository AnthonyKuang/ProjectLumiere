import Layout from '@components/layouts/Layout';
import Publication from '@components/ui/Publication';
import prisma from '@lib/prisma';
import Head from 'next/head';
import { getSession, useSession, signIn } from 'next-auth/react';
import { FaRegFile } from 'react-icons/fa';

export default function Publications({ publications }) {
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
        <title>My Publications</title>
      </Head>
      <h1 className="mb-5 heading-primary">Your Publications</h1>
      {publications.length === 0 ? (
        <section className="flex flex-col items-center justify-center w-full h-full p-5 border border-gray-700 rounded-xl">
          <FaRegFile className="w-8 h-8 mb-5 text-gray-500" />
          <h2 className="text-xl font-bold">No publications were found.</h2>
          <p>
            Go ahead and create a publication! Public publications can be found
            here after you publish a draft.
          </p>
        </section>
      ) : (
        <section className="space-y-5">
          {publications.map((publication) => (
            <Publication
              post={publication}
              key={publication.id}
              visibility="private"
            />
          ))}
        </section>
      )}
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    res.statusCode = 403;
    return { props: { publication: [] } };
  }

  const publications = await prisma.post.findMany({
    where: {
      author: { username: session.user.username },
      published: true,
    },
    select: {
      id: true,
      title: true,
      slug: true,
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

  publications.forEach((publication) => {
    publication.createdAt = String(publication.createdAt);
    publication.updatedAt = String(publication.updatedAt);
  });

  return {
    props: { publications },
  };
};

Publications.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
