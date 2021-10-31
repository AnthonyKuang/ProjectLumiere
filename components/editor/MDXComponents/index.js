import { useState } from 'react';
import Link from 'next/link';
import Confetti from 'react-confetti';
import Codepen from '@components/editor/MDXComponents/Codepen';
import CodeSandbox from '@components/editor/MDXComponents/CodeSandbox';

const a = (props) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

const img = ({ src, alt }) => (
  <figure>
    <img src={src} alt={alt} />
    <figcaption>{alt}</figcaption>
  </figure>
);

const ConfettiComponent = () => {
  const [coords, setCoords] = useState(undefined);
  const [pieces, setPieces] = useState(0);
  const [count, setCount] = useState(0);

  const onClick = (e) => {
    setCount(count + 1);
    setPieces(pieces + 24);
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const onComplete = () => {
    setPieces(0);
  };

  return (
    <>
      You{' '}
      <button
        type="button"
        onClick={onClick}
        className="bg-blue-550 cursor-help"
      >
        clicked me
      </button>{' '}
      exactly {count} times
      {pieces ? (
        <Confetti
          colors={['#0366d6', '#000000', '#ffffff']}
          numberOfPieces={pieces}
          confettiSource={coords}
          recycle={false}
          onConfettiComplete={onComplete}
        />
      ) : null}
    </>
  );
};

const MDXComponents = {
  a,
  img,
  Codepen,
  CodeSandbox,
  ConfettiComponent,
};

export default MDXComponents;
