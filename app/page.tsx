"use client";

import React, { useState } from "react";
import Charbox from "./components/charbox";
import data from "./data/gymleadertest.json";
import Pokebox from "./components/Pokebox";

export default function Home() {
  // Track which box is active (store its id or name)
  const [activeLeader, setActiveLeader] = useState<string | null>("Brock");
 
  const handleClick = (leaderName: string) => {
    setActiveLeader(leaderName);
  };

  return (
    <div>
    <div className="flex flex-row gap-5 p-5">
      {data.map((leader) => (
        <Charbox
          key={leader.name}
          gymLeader={leader.image}
          name={leader.name}
          isActive={activeLeader === leader.name}
          onClick={() => handleClick(leader.name)}
        />
      ))}

      
    </div>
    <Pokebox />
    </div>
  );
}
