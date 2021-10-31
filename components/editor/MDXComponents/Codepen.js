export default function Codepen({
  id,
  height = 500,
  tabs = 'result',
  clickToLoad = false,
  editable = false,
  theme = 'default',
}) {
  return (
    <iframe
      src={`https://codepen.io/team/codepen/embed${
        clickToLoad ? '/preview' : ''
      }/${id}?height=265&theme-id=${theme}&default-tab=${tabs}${
        editable ? '&editable=true' : ''
      }`}
      title={`codepen-${id}`}
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
