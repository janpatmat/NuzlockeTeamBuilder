"use client";

import React, { useState, useEffect } from "react";
import Charbox from "./components/charbox";
import data from "./data/gymleadertest.json";
import Pokebox from "./components/Pokebox";
import Userpokemon from "./components/user/Userpokemon";
import UserPokebox from "./components/user/UserPokebox";

export default function Home() {

  
  const [activeLeader, setActiveLeader] = useState<number | null>(1);
 const [pokemonMovesType, setPokemonMovesType] = useState<{name: string, url: string}[]>([]);

 
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
  
<div className="grid grid-cols-3 grid-rows-2 gap-2 w-3/4">


  {leaderPokemon?.map((leaderpokemon) => (
    <Pokebox
      key={`${activeLeader}-${leaderpokemon.pokemonName}-${leaderpokemon.pokemonId}`}
      id={activeLeader}
      name={leaderpokemon.pokemonName}
      moves={leaderpokemon.pokemonMoves}
    />
  ))}
</div>


<Userpokemon />
    
    </div>
  );
}
