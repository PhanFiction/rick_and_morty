export const extractCharacterIds = (urls: Array<string>): Array<number> => {
  const ids: number[] = [];

  urls.forEach(url => {
    const parts = url.split('/');
    const id = parseInt(parts[parts.length - 1]);
    if (!isNaN(id)) { // Ensure the parsed value is a number
      ids.push(id);
    }
  });

  return ids;
}