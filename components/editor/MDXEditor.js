// import { memo, useCallback, useMemo } from 'react';
// import { VFileMessage } from 'vfile-message';
// import Split from 'react-split';
// import { useMdx } from '@lib/xdm';
// import { basicSetup } from '@codemirror/basic-setup';
// import { markdown as langMarkdown } from '@codemirror/lang-markdown';
// import { oneDark } from '@codemirror/theme-one-dark';
// import { ErrorBoundary } from 'react-error-boundary';
// import CodeMirror from 'rodemirror';

// export default function MDXEditor({
// content,
//   setContent,
// title,
// authorName,
// authorImage,
//   collapsed,
//   children,
// }) {
//   const extensions = useMemo(() => [basicSetup, oneDark, langMarkdown()], []);
//   const [state, setConfig] = useMdx({
//     gfm: false,
//     frontmatter: false,
//     math: false,
//     value: children,
//   });

//   const ErrorFallback = ({ error, resetErrorBoundary }) => (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button type="button" onClick={resetErrorBoundary}>
//         Try again
//       </button>
//     </div>
//   );

//   const MemoizedCodeMirror = memo((props) => (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <CodeMirror {...props} />
//     </ErrorBoundary>
//   ));

//   const onUpdate = useCallback(
//     (v) => {
//       if (v.docChanged) {
//         setConfig({ ...state, value: String(v.state.doc) });
//       }
//     },
//     [state, setConfig]
//   );

//   const FallbackComponent = ({ error }) => {
//     const message = new VFileMessage(error);
//     message.fatal = true;
//     return (
//       <pre>
//         <code>{String(message)}</code>
//       </pre>
//     );
//   };

//   return (
//     <Split
//       sizes={[50, 50]}
//       minSize={0}
//       gutterSize={10}
//       dragInterval={1}
//       snapOffset={30}
//       className={`flex ${
//         collapsed ? 'h-screen -mt-18 lg:-mt-16' : 'h-editor-lg lg:h-editor-sm'
//       } overflow-y-hidden`}
//       gutter={(_, direction) => {
//         const gutter = document.createElement('div');
//         gutter.className = `gutter gutter-${direction}`;
//         return gutter;
//       }}
//     >
//       {/* <section>
//         <MonacoEditor
//           defaultLanguage="markdown"
//           value={content}
//           theme="vs-dark"
//           options={{
//             minimap: {
//               enabled: false,
//             },
//             tabSize: 2,
//             wordWrap: 'on',
//           }}
//           onChange={(value) => setContent(value)}
//         />
//       </section>
//       <MDXContent
//         mdx={content}
//         title={title}
//         authorName={authorName}
//         authorImage={authorImage}
//       /> */}

//       <section>
//         <MemoizedCodeMirror
//           value={state.value}
//           extensions={extensions}
//           onUpdate={onUpdate}
//         />
//       </section>

//       <section>
//         {state.file && state.file.result ? (
//           <ErrorBoundary FallbackComponent={FallbackComponent}>
//             {state.file.result()}
//           </ErrorBoundary>
//         ) : null}
//       </section>
//     </Split>
//   );
// }

import React, { useState, useMemo, memo, useCallback } from 'react';
import { useDebounceFn } from 'ahooks';
import * as runtime from 'react/jsx-runtime.js';
import { VFile } from 'vfile';
import { VFileMessage } from 'vfile-message';
import { evaluate } from 'xdm';
import remarkGfm from 'remark-gfm';
import CodeMirror from 'rodemirror';
import { basicSetup } from '@codemirror/basic-setup';
import { markdown as langMarkdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { ErrorBoundary } from 'react-error-boundary';
import Split from 'react-split';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button type="button" onClick={resetErrorBoundary}>
      Try again
    </button>
  </div>
);

// eslint-disable-next-line react/display-name
const MemoizedCodeMirror = memo((props) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <CodeMirror {...props} />
  </ErrorBoundary>
));

const FallbackComponent = ({ error }) => {
  const message = new VFileMessage(error);
  message.fatal = true;
  return (
    <pre>
      <code>{String(message)}</code>
    </pre>
  );
};

export default function Editor({ state, setConfig, collapsed }) {
  const extensions = useMemo(() => [basicSetup, oneDark, langMarkdown()], []);
  const onUpdate = useCallback(
    (v) => {
      if (v.docChanged) {
        setConfig({ ...state, value: String(v.state.doc) });
      }
    },
    [state, setConfig]
  );

  return (
    <Split
      sizes={[50, 50]}
      minSize={0}
      gutterSize={10}
      dragInterval={1}
      snapOffset={30}
      className={`flex ${
        collapsed ? 'h-screen -mt-18 lg:-mt-16' : 'h-editor-lg lg:h-editor-sm'
      } overflow-y-hidden`}
      gutter={(_, direction) => {
        const gutter = document.createElement('div');
        gutter.className = `gutter gutter-${direction}`;
        return gutter;
      }}
    >
      <section>
        <MemoizedCodeMirror
          value={state.value}
          extensions={extensions}
          onUpdate={onUpdate}
        />
      </section>

      <section>
        {state.file && state.file.result ? (
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            {state.file.result()}
          </ErrorBoundary>
        ) : null}
      </section>
    </Split>
  );
}
