export function defaultSort(a: any, b: any): number {
  return new Date(b.datePublished).valueOf() - new Date(a.datePublished).valueOf();
}
