import { useRouter } from 'next/router';
import Image from 'next/image';
import { getTimeAndDate } from '@lib/utilities/formatDate';
import Link from 'next/link';
import { FaPen, FaClock } from 'react-icons/fa';

export default function Publication({ post, visibility }) {
  const router = useRouter();

  const unpublishPost = async (slug) => {
    try {
      const body = { slug };
      await fetch('/api/post/unpublish', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await router.push('/me/publications');
    } catch (error) {
      console.error(error);
    }
  };

  const editPost = async (slug) => {
    router.push(`/me/publications/${slug}`);
  };

  const deletePost = async (slug) => {
    try {
      const body = { slug };
      await fetch('/api/post/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await router.push('/me/publications');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article>
      <Link href={`/press/${post.author.username}/${post.slug}`} passHref>
        <div className="p-5 transition-colors border border-gray-300 cursor-pointer dark:border-gray-700 rounded-xl hover:border-gray-400 dark:hover:border-gray-400">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <div className="flex items-center my-2 space-x-2">
            <Image
              src={post.author.image}
              alt={`Image of ${post.author.username}`}
              className="rounded-full"
              width={40}
              height={40}
            />
            <p>{post.author.username}</p>
          </div>
          <span className="text-base text-gray-500">
            <p className="flex items-center">
              <FaPen className="inline mr-2" />
              Created on {getTimeAndDate(post.createdAt)}
            </p>
            <p className="flex items-center">
              <FaClock className="inline mr-2" />
              Updated on {getTimeAndDate(post.updatedAt)}
            </p>
          </span>
        </div>
      </Link>
      {visibility === 'private' && (
        <div className="flex flex-row mt-2 space-x-2">
          <button
            type="button"
            className="p-2.5 button-tertiary"
            onClick={() => editPost(post.slug)}
          >
            Edit
          </button>
          <button
            type="button"
            className="p-2.5 button-tertiary"
            onClick={() => unpublishPost(post.slug)}
          >
            Unpublish
          </button>
          <button
            type="button"
            className="p-2.5 button-danger"
            onClick={() => deletePost(post.slug)}
          >
            Delete
          </button>
        </div>
      )}
    </article>
  );
}
