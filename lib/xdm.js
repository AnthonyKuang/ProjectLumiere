import { useState } from 'react';
import { useDebounceFn } from 'ahooks';
import { VFile } from 'vfile';
import { VFileMessage } from 'vfile-message';
import { evaluate } from 'xdm';
import * as runtime from 'react/jsx-runtime.js';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkEmoji from 'remark-emoji';
import remarkHint from 'remark-hint';
import rehypeWrap from 'rehype-wrap';
import rehypeTOC from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';
import MDXComponents from '@components/editor/MDXComponents';

export const useMdx = (defaults) => {
  const [state, setState] = useState({ ...defaults, file: null });
  const { run: setConfig } = useDebounceFn(
    async () => {
      const file = new VFile(content);

      try {
        file.result = (
          await evaluate(file, {
            ...runtime,
            useDynamicImport: true,
            remarkPlugins: [remarkGfm],
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

      setContent({ file });
    },
    { leading: false, trailing: true, wait: 500 }
  );

  return [content, setConfig];
};

export const compileMDX = async (mdx, setMDXOutput, setMDXLoading) => {
  const { default: Content } = await evaluate(mdx, {
    ...runtime,
    useDynamicImport: true,
    remarkPlugins: [remarkGfm, remarkUnwrapImages, remarkEmoji, remarkHint],
    rehypePlugins: [
      [rehypeWrap, { wrapper: 'main' }],
      rehypeSlug,
      [rehypeTOC, { position: 'afterend' }],
      rehypePrism,
    ],
  });

  setMDXOutput(() => {
    const mdxComponent = () => <Content components={MDXComponents} />;
    return mdxComponent;
  });

  setMDXLoading(false);
};
