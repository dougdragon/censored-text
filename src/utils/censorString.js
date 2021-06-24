import getKeywordsAndPhrases from "./getKeywordsAndPhrases";

const censorString = (originalString, censoredKeywords) => {
  const phrasesAndKeywords = getKeywordsAndPhrases(censoredKeywords);
  const re = new RegExp(phrasesAndKeywords.join("|"), "gi");

  return originalString.replace(re, "XXXX");
}

export default censorString;
