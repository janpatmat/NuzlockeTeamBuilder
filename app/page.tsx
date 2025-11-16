"use client";

import React, { useState, useEffect } from "react";
import Charbox from "./components/charbox";
import data from "./data/gymleadertest.json";
import Pokebox from "./components/Pokebox";

export default function Home() {

  
  const [activeLeader, setActiveLeader] = useState<number | null>(1);
 const [pokemonMovesType, setPokemonMovesType] = useState<{name: string, url: string}[]>([]);

 
  const handleClick = (leaderid: number) => {
    setActiveLeader(leaderid);
  };

  const leaderData = data.find(x => x.id === activeLeader);
  const leaderPokemon = leaderData?.pokemon;
  
  
//   useEffect(() => {
  
//   try {
//   async function fetchData() {
  
//    const res = await fetch(`https://pokeapi.co/api/v2/move?limit=100000&offset=0`);
//    if(res.ok){
//       const movedata = await res.json();
      
//       setPokemonMovesType(movedata.results);
//    }
//   }
//   fetchData();
//   }catch (error) {
//       console.error("Error fetching move data:", error);
//   }
  
  
//   }, [])
// console.log(pokemonMovesType)
// console.log(Object.values(pokemonMovesType || {}).find((item) => item.name === "tackle"));
console.log(pokemonMovesType.find((item) => item.name === "tackle"));

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
    key={`${activeLeader}-${leaderpokemon.pokemonName}-${leaderpokemon.pokemonId}`}
    id={activeLeader}
    name={leaderpokemon.pokemonName}
    moves={leaderpokemon.pokemonMoves}
  />
))}

    
    </div>
  );
}
