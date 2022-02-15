export default function translate(
  key: string,
  translations: Array<{ key: string; value: string }>,
  params?: { [id: string]: string },
): string {
  if (!key) {
    return 'Undefined translation key';
  }

  const e = translations.find((item) => item.key === key);
  if (!e) {
    return key;
  }
  if (!params) {
    return e.value;
  }
  const ids: string[] = Object.keys(params);
  if (ids.length === 0) {
    return e.value;
  }
  let s: string = e.value;
  ids.forEach((id) => {
    s = s.replace(`{{${id}}}`, params[id] + '');
  });
  return s;
}
