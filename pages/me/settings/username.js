import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';

export default function Username() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const submitUsername = async (e) => {
    e.preventDefault();

    try {
      const body = { username: `@${username}` };
      const response = await fetch('/api/user/username', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status === 200) {
        await router.push(router.query.callbackUrl);
      } else {
        setError('Username already taken');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Editor | Lumiere</title>
      </Head>
      <div className='h-screen grid place-items-center'>
        <main>
          <h1>Set your username</h1>
          <form onSubmit={submitUsername}>
            <span>@</span>
            <input
              type='text'
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input type='submit' value='Submit username' disabled={!username} />
          </form>
          <p>{error}</p>
        </main>
      </div>
    </>
  );
}