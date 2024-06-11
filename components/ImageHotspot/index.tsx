"use client"
import { cn } from "@/lib/utils"
import { useState } from "react"

const HotspotItems = [
  {
    id: 1,
    topPosition: 72,
    leftPosition: 38,
    contentPositionTop: true,
    content: (
      <p>
        A woman underneath a cherry blossom tree is setting up a picnic on a
        yellow checkered blanket.
      </p>
    ),
  },
  {
    id: 2,
    topPosition: 20,
    leftPosition: 45,
    contentPositionTop: false,
    content: (
      <p>
        Golden hour illuminates blooming cherry blossom trees around a pond.
      </p>
    ),
  },
  {
    id: 3,
    topPosition: 20,
    leftPosition: 80,
    contentPositionTop: false,
    content: (
      <p>
        In the pond, a group of people enjoying the serenity of the sunset in a
        rowboat.
      </p>
    ),
  },
  {
    id: 4,
    topPosition: 55,
    leftPosition: 60,
    contentPositionTop: true,
    content: (
      <p>
        In the distance, a building with Japanese-inspired architecture is
        perched on the lake.
      </p>
    ),
  },
]

export default function ImageHotspot() {
  const [activeContentId, setActiveContentId] = useState<number | null>(null)

  const handleActiveContent = (id: number) => {
    setActiveContentId(activeContentId === id ? null : id)
  }

  return (
    <div className="flex flex-col">
      <div className="w-full h-full relative">
        <div className="relative overflow-hidden rounded-[12px]">
          <img
            width={2250}
            height={1266}
            alt="A woman underneath a cherry blossom tree is setting up a picnic on a yellow checkered blanket around sunset. Behind her, a small, calm body of water containing a boat with 4 figures on their way to a Pagoda in the middle of the water. "
            src="/images/picnic-cherry-tree.jpeg.webp"
          />
        </div>

        {HotspotItems.map((item) => (
          <HotSpot
            handleActiveContent={() => handleActiveContent(item.id)}
            activeContent={activeContentId === item.id}
            key={item.id}
            topPosition={item.topPosition}
            leftPosition={item.leftPosition}
            content={item.content}
            contentPositionTop={item.contentPositionTop}
          />
        ))}
      </div>

      <div className="relative mt-5 block md:hidden">
        {HotspotItems.map((item) => (
          <div
            className={cn(
              "absolute top-0 left-0 w-full py-3 px-4 bg-slate-900 rounded-[6px] transition-all duration-300 ease-in-out",
              activeContentId === item.id ? "opacity-100" : "opacity-0"
            )}
            key={item.id}
          >
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const HotSpot = ({
  activeContent,
  content,
  topPosition,
  leftPosition,
  contentPositionTop,
  handleActiveContent,
}: {
  topPosition?: number
  leftPosition?: number
  content?: React.ReactNode
  contentPositionTop?: boolean
  activeContent?: boolean
  handleActiveContent?: () => void
}) => {
  return (
    <div
      className="absolute"
      style={{
        top: `${topPosition || 20}%`,
        left: `${leftPosition || 50}%`,
      }}
    >
      <button
        className={cn(
          "size-[32px] flex items-center justify-center rounded-full backdrop-blur-xl shrink-0",
          activeContent ? "bg-red-500" : "bg-black"
        )}
        onClick={handleActiveContent}
      >
        {activeContent ? <CloseIcon /> : <PlusIcon />}
      </button>

      <div
        className={cn(
          "bg-black/80 rounded-[6px] backdrop-blur-xl max-w-[240px] w-[240px] text-[14px] tracking-[0.024224px] py-3 px-4 left-1/2 -translate-x-1/2 absolute transition-all duration-300 ease-in-out hidden md:block",
          contentPositionTop ? "bottom-full mb-3" : "top-full mt-3",
          activeContent ? "opacity-100" : "opacity-0"
        )}
      >
        {content}
      </div>
    </div>
  )
}

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.75rem"
      viewBox="0 0 8 8"
      fill="none"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4.5 4.5V8h-1V4.5H0v-1h3.5V0h1v3.5H8v1H4.5Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  )
}

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  )
}
