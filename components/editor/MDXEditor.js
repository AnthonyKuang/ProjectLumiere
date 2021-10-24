import React, { useMemo, memo, useCallback } from 'react';
import { VFileMessage } from 'vfile-message';
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

      <section className="overflow-y-auto">
        {state.file && state.file.result ? (
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            <article className="prose break-words bg-gray-100 dark:bg-gray-900 max-w-none dark:prose-dark">
              <div className="container">{state.file.result()}</div>
            </article>
          </ErrorBoundary>
        ) : null}
      </section>
    </Split>
  );
}
