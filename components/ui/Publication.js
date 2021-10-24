import { useRouter } from 'next/router';
import Image from 'next/image';
import { getTimeAndDate } from '@lib/utilities/formatDate';

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
    <>
      <button
        type="button"
        className="p-5 border border-gray-300 cursor-pointer dark:border-gray-700 rounded-xl"
        onClick={() =>
          router.push(`/press/${post.author.username}/${post.slug}`)
        }
      >
        <h2 className="text-xl font-bold">{post.title}</h2>
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
        <p>Created on {getTimeAndDate(post.createdAt)}</p>
        <p>Updated on {getTimeAndDate(post.updatedAt)}</p>
      </button>
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
    </>
  );
}
