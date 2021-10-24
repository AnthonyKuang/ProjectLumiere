// import { ErrorBoundary } from 'react-error-boundary';
// import { useState, useMemo } from 'react';
// import { evaluateMDX } from '@lib/xdm';
// import Article from '@components/ui/Article';

// export default function MDXContent({
//   mdx,
//   title,
//   createdAt,
//   updatedAt,
//   authorName,
//   authorImage,
// }) {
//   const [MDXOutput, setMDXOutput] = useState(() => {
//     const mdxComponent = ({ children }) => <>{children}</>;
//     return mdxComponent;
//   });
//   const [error, setError] = useState(null);

//   useMemo(() => {
//     evaluateMDX(mdx, setMDXOutput, setError);
//   }, [mdx]);

//   return (
//     <Article
//       title={title}
//       createdAt={createdAt}
//       updatedAt={updatedAt}
//       authorName={authorName}
//       authorImage={authorImage}
//     >
//       <ErrorBoundary>
//         <MDXOutput />
//         {error && error.message}
//       </ErrorBoundary>
//     </Article>
//   );
// }
