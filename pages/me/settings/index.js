import Layout from '@components/layouts/Layout';
import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useLocalStorage } from 'react-use';
import UsernameForm from '@components/ui/UsernameForm';

export default function Settings() {
  // eslint-disable-next-line no-unused-vars
  const [_, setValue] = useLocalStorage('refresh', false);
  const router = useRouter();
  const { status, data: session } = useSession({
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
      <h1 className="heading-primary">Settings</h1>
      <div className="divide-y divide-gray-400">
        <section className="py-5">
          <h2 className="text-xl font-bold">Change your username</h2>
          <p className="mb-5">
            You can change your username, but only to a username that is not
            currently being used by another user. To change your username, use
            the text field below and click on the button.
          </p>
          <UsernameForm
            initialUsername={session.user.username.substr(1)}
            redirectUrl="/me/settings"
          />
        </section>
        <section className="py-5">
          <h2 className="text-xl font-bold">Delete your account</h2>
          <p>
            You can choose to delete your account at any time. Do note that
            doing so may result in all your previously-created posts being
            permanently deleted. If you&#39;re sure, you may delete your account
            by clicking on the button below.
          </p>
          <button
            type="button"
            className="px-5 py-3 mt-5 text-red-500 border-red-500 transition-colors button-tertiary lg:py-2.5 hover:text-red-400"
            onClick={() => deleteAccount()}
          >
            Delete my account
          </button>
        </section>
      </div>
    </>
  );
}

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
