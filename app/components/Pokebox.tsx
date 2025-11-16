"use client"

import React, { use } from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Movecards from './Movecards';
import data from '../data/gymleadertest.json';
interface PokeStats {
    id: number | null;
    name: string | null;
    moves: Record<string, string | undefined> | undefined;


}

const Pokebox: React.FC<PokeStats> = ({id, name, moves}) => {
const [pokemon, setPokemon] = useState<any>(null);


const leaderData = data.find(x => x.id === id);

console.log(moves)

// Fetch Pokemon data from PokeAPI the bracket on the end is for the dependency array which makes it so it only fetches when the name changes
useEffect(() => {
    async function fetchData() {

         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`);
        
        if (response.ok) {
            
            const pokedata = await response.json();
            
            setPokemon(pokedata);
          
        }
       
    }
    fetchData();
    
   
    
},[name])  



  return (
    <div className='flex flex-col bg-normalGreyCard w-md rounded-xl border-4 border-black'>
        {/* upper */}
        <div className='flex justify-between p-2 border-b-2 border-black'>

            <h3>{id}</h3>
            
            <h3 className='uppercase'>{name ? (name) : (<p>Loading...</p>)}</h3>

            <div className='flex gap-3'>
                <h3 >Level</h3>
                
               {pokemon?.types?.map((type: { type: { name: string } }, index: number) => (
                 <p key={index} className="uppercase">
                 {type.type.name}
                </p>
))}

               
            </div>
        </div>
        {/* lower */}
        <div className='flex pb-1'>
            {/* left */}
            <div className='w-1/2 flex justify-center items-center border-r-2 border-black'>
                {pokemon ? (<Image src={pokemon.sprites.front_default} alt = "Pokemon Image" width={150} height={100} />) : (<p>Loading...</p>)}
                
                
            </div>
                {/* right */}
            <div className='w-1/2'>
               

               {/* {id !== null && data[id - 1]?.pokemon?.map((leaderpokemon, i) => (
                leaderpokemon.pokemonMoves.map((move, j) => (
                    <Movecards 
                    key={`${i}-${j}`}
                    name={move}
                    type="Normal"
                    />
                ))
                ))} */}

                {/* {moves?.map((move, index) => (
                    <Movecards
                    key={index}
                    name={move}
                    type="Normal"
                    />
                ))} */}

                {Object.entries(moves || {}).map(([moveName, moveType], index) => (
                    <Movecards
                        key={index}
                        name={moveName}
                        type={moveType || "Unknown"}
                    />
                ))}

              
            </div>
        </div>
    </div>
  )
}

export default Pokebox