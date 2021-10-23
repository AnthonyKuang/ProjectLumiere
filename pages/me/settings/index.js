import Layout from '@components/layouts/Layout';
import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useLocalStorage } from 'react-use';

export default function Settings() {
  // eslint-disable-next-line no-unused-vars
  const [_, setValue] = useLocalStorage('refresh', false);
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  const deleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you'd like to delete your account? This action is irreversible."
    );

    if (confirmed) {
      try {
        const response = await fetch('/api/user/delete', {
          method: 'DELETE',
          header: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
          setValue(true);
          await router.push('/');
        } else {
          console.error('Action failed');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (status === 'loading') return null;

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <main className="container">
        <h1 className="heading-primary">Settings</h1>
        <section className="mt-5">
          <h2 className="text-xl font-bold">Delete your account</h2>
          <p>
            You can choose to delete your account at any time. Do note that
            doing so may result in all your previously-created posts being
            permanently deleted. If you&#39;re sure, you may delete your account
            by clicking on the button below.
          </p>
          <button
            type="button"
            className="button-danger px-5 py-3 lg:py-2.5 mt-5"
            onClick={() => deleteAccount()}
          >
            Delete my account
          </button>
        </section>
      </main>
    </>
  );
}

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
