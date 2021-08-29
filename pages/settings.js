import { useSession } from 'next-auth/client';
import Layout from '@components/layouts/Layout';

export default function Settings() {
  const [session] = useSession();

  return <p>This is a protected settings page</p>;
}

Settings.requireAuth = true;

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
