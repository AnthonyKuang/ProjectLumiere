import { useState } from 'react';
import { useDebounceFn } from 'ahooks';
import { VFile } from 'vfile';
import { VFileMessage } from 'vfile-message';
import { evaluate } from 'xdm';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkEmoji from 'remark-emoji';
import remarkHint from 'remark-hint';
import remarkMath from 'remark-math';
import { remarkMdxCodeMeta } from 'remark-mdx-code-meta';
import rehypeWrap from 'rehype-wrap';
import rehypeTOC from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import rehypePrism from '@mapbox/rehype-prism';

export const useXdm = (defaults) => {
  const [state, setState] = useState({ ...defaults, file: null });
  const { run: setConfig } = useDebounceFn(
    async (config) => {
      const file = new VFile(config.value);

      try {
        file.result = (
          await evaluate(file, {
            ...runtime,
            useDynamicImport: true,
            remarkPlugins: [
              remarkGfm,
              remarkUnwrapImages,
              remarkEmoji,
              remarkHint,
              remarkMath,
              remarkMdxCodeMeta,
            ],
            rehypePlugins: [
              [rehypeWrap, { wrapper: 'main' }],
              rehypeSlug,
              [rehypeTOC, { position: 'afterend' }],
              rehypeKatex,
              rehypePrism,
            ],
          })
        ).default;
      } catch (error) {
        const message =
          error instanceof VFileMessage ? error : new VFileMessage(error);

        if (!file.messages.includes(message)) {
          file.messages.push(message);
        }

        message.fatal = true;
      }

      setState({ ...config, file });
    },
    { leading: false, trailing: true, wait: 500 }
  );

  return [state, setConfig];
};

// export const compileMDX = async (mdx, setMDXOutput, setMDXLoading) => {
//   const { default: Content } = await evaluate(mdx, {
//     ...runtime,
//     useDynamicImport: true,
//     remarkPlugins: [remarkGfm, remarkUnwrapImages, remarkEmoji, remarkHint],
//     rehypePlugins: [
//       [rehypeWrap, { wrapper: 'main' }],
//       rehypeSlug,
//       [rehypeTOC, { position: 'afterend' }],
//       rehypePrism,
//     ],
//   });

//   setMDXOutput(() => {
//     const mdxComponent = () => <Content components={MDXComponents} />;
//     return mdxComponent;
//   });

//   setMDXLoading(false);
// };
