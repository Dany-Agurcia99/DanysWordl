"use client"

import dynamic from "next/dynamic"
import SubmitBtn from "./components/SubmitBtn"

const TilesRow = dynamic(() => import("./components/TilesRow"), {
  ssr: false,
})

export default function Game({
  shuffledWord,
  originalWord,
}: {
  shuffledWord: string
  originalWord: string
}) {
  return ( 
    <>
      <TilesRow shuffledWord={shuffledWord} originalWord={originalWord} />
      {/* <SubmitBtn word={originalWord} /> */}
    </>
  )
}
