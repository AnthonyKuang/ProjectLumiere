export default function CodeSandbox({ id, height = 500 }) {
  return (
    <iframe
      src={`https://codesandbox.io/embed/${id}?codemirror=1`}
      title={`codeSandbox-${id}`}
      height={height}
      style={{
        width: '100%',
      }}
      scrolling="no"
      frameBorder="no"
      allowFullScreen
    />
  );
}
