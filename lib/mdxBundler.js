import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';

export const getAllSlugs = async (directory) => {
  const postsPath = join(process.cwd(), 'posts', directory.join('/'));
  const fileNames = readdirSync(postsPath);

  return fileNames;
};

export const getPostBySlug = async (directory, slug) => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

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
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  const { code, frontmatter } = await bundleMDX(mdxSource.trim());

  return {
    code,
    frontmatter,
  };
};
