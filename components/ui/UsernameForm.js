import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from 'react-use';

const UsernameForm = ({ initialUsername, redirectUrl }) => {
  const [username, setUsername] = useState('');
  const [prompt, setPrompt] = useState(null);
  const router = useRouter();
  const [, setValue] = useLocalStorage('refresh', false);

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
        setValue(true);
        await router.push(router.query.callbackUrl || redirectUrl);
        response.json().then((data) => setPrompt(data.message));
      } else if (response.status === 400) {
        response.json().then((data) => setPrompt(data.reason));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={submitUsername} className="space-x-2">
        <span>@</span>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username || initialUsername}
          placeholder="Username"
          className="text-field"
        />
        <input
          type="submit"
          value="Submit username"
          className="px-5 py-3 text-sm bg-transparent cursor-pointer lg:py-2.5 button-tertiary"
          disabled={!username}
        />
      </form>
      <p>{prompt}</p>
    </>
  );
};

export default UsernameForm;
