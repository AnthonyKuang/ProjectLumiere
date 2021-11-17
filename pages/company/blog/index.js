import Head from 'next/head';
import Link from 'next/link';
import Layout from '@components/layouts/Layout';
import { getAllFilesFrontMatter } from '@lib/mdxBundler';
// error
export default function Blogs({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Lumiere</title>
      </Head>

      <h1 className="mb-2 text-gray-100 heading-primary">Lumiere Blogs</h1>
      <p className="mb-8 text-gray-300 text-md">
        Catch up on the latest blog from Lumiere!
      </p>
      {posts.map((post) => (
        <div
          key={post}
          className="w-full px-4 py-8 duration-200 border-t border-b border-gray-500 hover:border-gray-200"
        >
          <Link key={post} href={`/company/blog/${post.file}`} passHref>
            <h2 className="inline text-2xl font-bold hover:cursor-pointer">
              {post.title}
            </h2>
          </Link>
          <p className="mb-8">Published {post.date}</p>{' '}
          <p className="mb-8 text-xl text-gray-300">{post.desc}</p>
          <Link key={post} href={`/company/blog/${post.file}`} passHref>
            <p className="inline text-lg text-purple-400 hover:cursor-pointer">
              Read more! →
            </p>
          </Link>
        </div>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllFilesFrontMatter(['company', 'blog']);
  return {
    props: {
      posts,
    },
  };
};

Blogs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
