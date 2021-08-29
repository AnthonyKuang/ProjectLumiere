import { signIn, useSession } from 'next-auth/client';
import { useEffect } from 'react';

export default function Auth({ children }) {
  const [session, loading] = useSession();
  const isThereUser = !!session?.user;

  useEffect(() => {
    if (loading) return;
    if (!isThereUser) signIn();
  }, [isThereUser, loading]);

  if (isThereUser) {
    return children;
  }

  return <div></div>;
}
