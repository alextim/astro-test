import type { GetStaticPathsOptions as imported } from 'astro';

/// <reference path="./address.d.ts" />
/// <reference path="./cms.d.ts" />
/// <reference path="./contacts.d.ts" />
/// <reference path="./i18n.d.ts" />
/// <reference path="./SEO.d.ts" />
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

export type Link = ILink;

type Phone = string;
type Email = string;
type Time = string;
type ISODate = string;

interface ITranslationFunc {
  (key: string, params?: Record<string, string>): string;
}
