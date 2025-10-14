"use client"
import React from "react"
import { useState } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable"
import Tile from "./Tile"

interface LetterTile {
  id: string
  letter: string
}

const TilesRow = ({
  shuffledWord,
  originalWord,
}: {
  shuffledWord: string
  originalWord: string
}) => {
  const [correctWord] = useState(originalWord.split(""))
  const initialLetters = shuffledWord.split("").map(
    (letter, index) =>
      ({
        id: index.toString(),
        letter,
        isCorrect: correctWord[index] === letter,
      } as LetterTile)
  )

  const [guessingWord, setGuessingWord] = useState<LetterTile[]>(initialLetters)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = guessingWord.findIndex((l) => l.id === active.id)
      const newIndex = guessingWord.findIndex((l) => l.id === over.id)

      setGuessingWord(arrayMove(guessingWord, oldIndex, newIndex))
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={guessingWord.map((l) => l.id)}
        strategy={horizontalListSortingStrategy}
      >
        <div className="flex gap-3">
          {guessingWord.map((letter, index) => (
            <Tile
              key={letter.id}
              id={letter.id}
              letter={letter.letter}
              correctLetter={correctWord[index]}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default TilesRow
