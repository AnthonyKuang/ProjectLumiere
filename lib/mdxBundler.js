import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';

const fs = require('fs');

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

export const getAllFilesFrontMatter = (directory) => {
  const postsPath = join(process.cwd(), 'posts', directory.join('/'));
  const files = readdirSync(postsPath);

  const allFrontMatter = [];

  files.forEach((file) => {
    let path;
    if (process.platform === 'win32') {
      path = `${process.cwd()}\\posts\\company\\blog\\${file}`;
    } else {
      path = `${process.cwd()}/posts/company/blog/${file}`;
    }
    const src = fs.readFileSync(path, 'utf-8');
    const { data: frontmatter } = matter(src);
    allFrontMatter.push(frontmatter);
  });

  return allFrontMatter;
};
