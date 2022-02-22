import type { GetStaticPathsOptions as imported } from 'astro';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

type GetStaticPathsOptions = imported;

interface ILink {
  to: string;
  title: string;
}

type Link = ILink;

type Phone = string;
type Email = string;
type Time = string;
type ISODate = string;

interface ITranslationFunc {
  (key: string, params?: Record<string, string>): string;
}
