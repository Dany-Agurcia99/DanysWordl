"use client"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface TileProps {
  id: string
  letter: string
  correctLetter?: string
}

const Tile = ({ id, letter, correctLetter }: TileProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled: correctLetter === letter })

  const tileColor = correctLetter === letter ? "bg-green-600" : "bg-neutral-800"

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transform ? "transform 80ms ease" : undefined,
      }}
      className={`w-28 h-28 flex cursor-grab font-bold border-2 border-white justify-center items-center text-5xl select-none text-white ${tileColor}`}
      {...attributes}
      {...listeners}
    >
      {letter.toUpperCase()}
    </div>
  )
}

export default Tile
