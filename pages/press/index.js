import Layout from '@components/layouts/Layout';
import Head from 'next/head';
import prisma from '@lib/prisma';
import Publication from '@components/ui/Publication';
import { FaRegFile } from 'react-icons/fa';

export default function Press({ publications }) {
  return (
    <>
      <Head>
        <title>Lumiere Press</title>
      </Head>

      <>
        <h1 className="mb-5 heading-primary">Lumiere Press</h1>
        {publications.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-full p-5 border border-gray-700 rounded-xl">
            <FaRegFile className="w-8 h-8 mb-5 text-gray-500" />
            <h2 className="text-xl font-bold">No publications were found.</h2>
            <p>
              Press is a collection of public posts by everyone. Write and
              publish a publication to have it here in Press!
            </p>
          </div>
        ) : (
          <section className="space-y-5">
            {publications.map((publication) => (
              <Publication
                key={publication.id}
                post={publication}
                visibility="public"
              />
            ))}
          </section>
        )}
      </>
    </>
  );
}

export const getServerSideProps = async () => {
  const publications = await prisma.post.findMany({
    where: {
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

Press.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
