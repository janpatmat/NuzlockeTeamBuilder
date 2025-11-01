"use client";

import React, { useState } from "react";
import Charbox from "./components/charbox";
import data from "./data/gymleadertest.json";
import Pokebox from "./components/Pokebox";

export default function Home() {
  
  const [activeLeader, setActiveLeader] = useState<number | null>(2);
 
  const handleClick = (leaderid: number) => {
    setActiveLeader(leaderid);
  };

  const leaderData = data.find(x => x.id === activeLeader);
  const leaderPokemon = leaderData?.pokemon;

  return (
    <div>
    <div className="flex flex-row gap-5 p-5">
      {data.map((leader) => (
        <Charbox
          key={leader.id}
          gymLeader={leader.image}
          name={leader.name}
          isActive={activeLeader === leader.id}
          onClick={() => handleClick(leader.id)}
        />
      ))}

      
    </div>
  
    
      
     {leaderPokemon?.map((leaderpokemon) => (
  <Pokebox
    key={`${activeLeader}-${leaderpokemon.pokemonName}`}
    id={activeLeader}
    name={leaderpokemon.pokemonName}
  />
))}

    
    </div>
  );
}
