// pages/_document.js augments the <html> and <body> tags of every page
// See https://nextjs.org/docs/advanced-features/custom-document

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='bg-white dark:bg-black text-black dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
