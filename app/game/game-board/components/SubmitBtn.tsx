"use client"
import React from "react"

const SubmitBtn = ({ word }: { word: string }) => {
  const handleSubmit = () => {
    console.log(word)
  }
  return (
    <>
      <button
        className="bg-purple-900 text-white text-2xl font-bold p-4 m-4 rounded-xl w-[30%] hover:bg-teal-600 transition"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </>
  )
}

export default SubmitBtn
