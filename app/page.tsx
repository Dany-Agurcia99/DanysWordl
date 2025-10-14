import Game from "./game/game-board/page"
import getRandomizedWord from "@/lib/getRandomizedWord"

export default async function Home() {
  const wordData = await getRandomizedWord()
  return (
    <div className="flex flex-col min-h-screen justify-start items-center bg-neutral-900 text-foreground">
      <h1 className="text-6xl pt-24 font-bold text-center">Dany's Wordl</h1>
      <div className="pt-5 pb-18 text-2xl">Guess the correct word!</div>
      <Game
        shuffledWord={wordData.shuffledWord}
        originalWord={wordData.originalWord}
      />
    </div>
  )
}
