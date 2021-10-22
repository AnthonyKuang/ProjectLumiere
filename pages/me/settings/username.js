import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import projectLumiere from '@public/images/logos/ProjectLumiere.svg';
import { useLocalStorage } from 'react-use';
import UsernameForm from '@components/ui/UsernameForm';

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
        <title>Username | Lumiere</title>
      </Head>
      <div className="grid place-items-center h-screen text-center">
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
