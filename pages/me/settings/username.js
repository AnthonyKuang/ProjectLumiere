import UsernameForm from '@components/ui/UsernameForm';
import projectLumiere from '@public/images/logos/ProjectLumiere.svg';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';

export default function Username() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === 'loading') return null;

  return (
    <>
      <Head>
        <title>Username — Lumiere</title>
      </Head>
      <div className="grid h-screen text-center place-items-center">
        <main>
          <figure className="flex justify-center">
            <Image
              src={projectLumiere}
              alt="Project Lumiere logo"
              height={100}
              width={100}
            />
          </figure>
          <h1 className="mt-2 text-gray-100 heading-primary">
            Welcome to Lumiere!
          </h1>
          <p className="mt-2 mb-5">
            Let&#39;s get started. Set your username below and you&#39;re all
            set to go.
          </p>
          <UsernameForm />
        </main>
      </div>
    </>
  );
}
