export default async function getRandomizedWord() {
  const randomWordURL = "https://random-word-api.herokuapp.com/word?length=5"
  const randomWord = await fetch(randomWordURL).then((res) => res.json())
  console.log("random word: ", randomWord[0])
  const shuffledWord = shuffleWord(randomWord[0])
  return { originalWord: randomWord[0], shuffledWord }
}

const shuffleWord = (word: string) => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
}
