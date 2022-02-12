const translate = (key, translations, params) => {
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
  const ids = Object.keys(params);
  if (ids.length === 0) {
    return e.value;
  }
  let s = e.value;
  ids.forEach((id) => {
    s = s.replace(`{{${id}}}`, params[id]);
  });
  return s;
};

export default translate;
