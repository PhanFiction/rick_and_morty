export const extractCharacterIds = (urls) => {
  const ids = [];

  urls.forEach(url => {
    const parts = url.split('/');
    ids.push(parseInt(parts[parts.length - 1]));
  });

  return ids;
}