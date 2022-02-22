declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

import type { GetStaticPathsOptions as imported} from 'astro';
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
