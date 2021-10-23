import { useRouter } from 'next/router';
import { getTimeAndDate } from '@lib/utilities/formatDate';

export default function Post({ post }) {
  const router = useRouter();

  const publishPost = async (slug) => {
    try {
      const body = { slug };
      await fetch('/api/post/publish', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await router.push('/me/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (slug) => {
    try {
      const body = { slug };
      await fetch('/api/post/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await router.push('/me/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="p-5 border border-gray-300 cursor-pointer dark:border-gray-700 rounded-xl"
        onClick={() => router.push(`/me/drafts/${post.slug}`)}
      >
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>Created on {getTimeAndDate(post.createdAt)}</p>
        <p>Updated on {getTimeAndDate(post.updatedAt)}</p>
      </button>
      <div className="flex mt-2 space-x-2">
        <button
          type="button"
          className="p-2.5 button-tertiary"
          onClick={() => publishPost(post.slug)}
        >
          Publish
        </button>
        <button
          type="button"
          className="p-2.5 button-danger"
          onClick={() => deletePost(post.slug)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
