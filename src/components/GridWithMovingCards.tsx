"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const musicSchoolTestimonials = [
  {
    "quote": "The sound quality of this album is phenomenal. Each track is a journey, beautifully composed and masterfully produced.",
    "name": "Emily Clark",
    "title": "Music Producer"
  },
  {
    "quote": "This song's lyrics resonate deeply with listeners, offering a powerful message that is both relatable and inspiring.",
    "name": "Liam Turner",
    "title": "Songwriter"
  },
  {
    "quote": "The band's live performance was electrifying, capturing the energy and spirit of their studio recordings perfectly.",
    "name": "Olivia Garcia",
    "title": "Concert Reviewer"
  },
  {
    "quote": "The fusion of genres in this album is innovative and refreshing, pushing the boundaries of contemporary music.",
    "name": "James Williams",
    "title": "Music Critic"
  }
]

function GridWithMovingCards() {
  return (
    <div  className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our harmony Voices of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default GridWithMovingCards