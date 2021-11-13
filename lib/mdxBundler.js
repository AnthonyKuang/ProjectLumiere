import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';

export const getAllSlugs = async (directory) => {
  const postsPath = join(process.cwd(), 'posts', directory.join('/'));
  const fileNames = readdirSync(postsPath);

  return fileNames;
};

export const getPostBySlug = async (directory, slug) => {
  const mdxSource = readFileSync(
    join(process.cwd(), 'posts', directory.join('/'), `${slug}.mdx`),
    'utf-8'
  ).trim();

  const { code, frontmatter } = await bundleMDX(mdxSource);

  return {
    code,
    frontmatter,
  };
};

export const compileMdx = async (mdxSource) => {
  const { code, frontmatter } = await bundleMDX(mdxSource.trim());

  return {
    code,
    frontmatter,
  };
};
