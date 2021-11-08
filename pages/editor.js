import { useState, useRef } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import MDXEditor from '@components/editor/MDXEditor';
import Header from '@components/layouts/Header';
import { useBeforeunload } from 'react-beforeunload';
import { useXdm } from '@lib/xdm';

export default function Editor() {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const titleInput = useRef(null);
  const router = useRouter();
  const { data: session } = useSession();

  const [state, setConfig] = useXdm({
    value: '',
  });

  const saveDraft = async () => {
    const content = state.value;
    try {
      const body = { title, content, slug };
      await fetch('/api/post/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await router.push('/me/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  const showUntitledError = () => {
    titleInput.current.focus();
    toast.error('You must set a title to your publication before saving.');
  };

  useBeforeunload((event) => {
    if (session && (title !== '' || state.value !== '')) {
      event.preventDefault();
    }
  });

  return (
    <>
      <Head>
        <title>Editor — Lumiere</title>
      </Head>

      <Header
        pageType="editor"
        title={title}
        titleInput={titleInput}
        saveDraft={saveDraft}
        showUntitledError={showUntitledError}
        setTitle={setTitle}
        setSlug={setSlug}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <MDXEditor state={state} setConfig={setConfig} collapsed={collapsed} />
      <Toaster position="bottom-left" />
    </>
  );
}
