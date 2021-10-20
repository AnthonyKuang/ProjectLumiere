import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from 'react-use';

const UsernameForm = ({ initialUsername, redirectUrl }) => {
  const [username, setUsername] = useState('');
  const [prompt, setPrompt] = useState(null);
  const router = useRouter();
  const [_, setValue] = useLocalStorage('refresh', false);

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
          className="py-3 lg:py-2.5 rounded-xl border-2 bg-transparent pr-9 lg:pr-8 pl-4 text-sm border-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-gray-600 placeholder-gray-500 transition-colors duration-200"
        />
        <input
          type="submit"
          value="Submit username"
          className="px-5 py-3 lg:py-2.5 text-sm button-tertiary bg-transparent cursor-pointer"
          disabled={!username}
        />
      </form>
      <p>{prompt}</p>
    </>
  );
};

export default UsernameForm;
