import * as path from 'path';
import { promises as fs } from 'fs';

import glob from 'glob';
import { unified } from 'unified';
import markdown from 'remark-parse';
import markdownToHtml from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';

import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';

async function readFile(fileName: string) {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    return data.toString();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function renderMarkdownWithFrontmatter(contents: string) {
  const { data: frontmatter, content } = matter(contents);
  const value = await renderMarkdown(content);
  return { ...value, frontmatter };
}

async function renderMarkdown(content: string) {
  let parser = unified()
    .use(markdown)
    .use(remarkGfm)
    .use(remarkSmartypants)
  	.use([[markdownToHtml as any, { allowDangerousHtml: true, passThrough: ['raw'] }]]);

  let result: string;
  try {
		const vfile = await parser.use(rehypeStringify, { allowDangerousHtml: true }).process(content);
		result = vfile.toString();
	} catch (err) {
		console.error(err);
		throw err;
	}

	return { html: result.toString() };
}

export async function fetchContent(ptrn: string) {
  if (!ptrn) {
    throw new Error('pattern is reqired parameter');
  }
  const pattern = path.join(process.cwd(), ptrn).replaceAll('\\', '/');

  const files = await new Promise((res, rej) =>
      glob(pattern, (err, fls) => {
        if (err != null) {
          rej(err);
        }
        else {
          res(fls);
        }
      })
  );

  if (!files || !Array.isArray(files) || (files as string[]).length === 0) {
    console.error(`No matches ${pattern}`);
    return null;
  }

  return await Promise.all((files as string[]).map(async (pathname: string) => {
    const fileContent = await readFile(pathname);
    const allContent = await renderMarkdownWithFrontmatter(fileContent);
    if (!allContent) {
      throw new Error(`coudn't parse ${pathname}`);
    }
    const { html, frontmatter } = allContent;
    return {
      astro: {
        html,
      },
      file: {
        pathname: pathname.replaceAll('\\', '/'),
      },
      ...frontmatter,
    };
  }));
}

