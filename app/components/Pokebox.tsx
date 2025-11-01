"use client"

import React, { use } from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Movecards from './Movecards';
import data from '../data/gymleadertest.json';
interface PokeStats {
    id: number | null;
    name: string | null;

}

const Pokebox: React.FC<PokeStats> = ({id, name}) => {
const [pokemon, setPokemon] = useState<any>(null);
const [loading, setLoading] = useState(true);

const leaderData = data.find(x => x.id === id);
const leaderPokemon = leaderData?.pokemon;


useEffect(() => {
    async function fetchData() {
//    Challenge use .then() instead of async/await
         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`);
        
        if (response.ok) {
            
            const data = await response.json();
            console.log(data.types);
            setPokemon(data);
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
                
                {pokemon?.types?.map((type: {type:{name:string}}) => (
                    <p className='uppercase'>{type.type.name}</p>
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
               <Movecards name='Transform' type='Normal'/>
              
            </div>
        </div>
    </div>
  )
}

export default Pokebox