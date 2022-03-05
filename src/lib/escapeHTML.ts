const escapeHTML = (s: any): string => {
  if (!s) {
    return '';
  }
  return s.replace(
    /[&<>'"]/g,
    tag =>
    ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
};

export default escapeHTML;
