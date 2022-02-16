/// <reference path="i18n.d.ts" />
/// <reference path="address.d.ts" />
/// <reference path="contacts.d.ts" />
/// <reference path="SEO.d.ts" />
/// <reference path="cms.d.ts" />
/// <reference path="misc-data.d.ts" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


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
