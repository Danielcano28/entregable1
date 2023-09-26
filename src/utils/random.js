const getRandomPhrases = (phrases) => {
  const randonIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randonIndex];
};

export { getRandomPhrases };
