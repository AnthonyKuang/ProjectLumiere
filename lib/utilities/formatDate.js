export const getTimeAndDate = (str) =>
  new Date(str).toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
