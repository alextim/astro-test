import type { GetStaticPathsOptions as imported } from 'astro';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
declare global {
  type GetStaticPathsOptions = imported;

  interface Link {
    to: string;
    title: string;
  }

  type Phone = string;
  type Email = string;
  type Time = string;

  interface ITranslationFunc {
    (key: string, params?: Record<string, string>): string;
  }
}

export {};
