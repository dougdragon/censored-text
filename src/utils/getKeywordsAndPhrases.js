const getKeywordsAndPhrases = keywordsAndPhrases => {
  const spacesAndQuotesRegex = / |['"](.*?)['"]/g;

  return keywordsAndPhrases
    .split(spacesAndQuotesRegex)
    .filter(val => val);
}

export default getKeywordsAndPhrases;
