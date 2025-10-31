import React, { use } from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Movecards from './Movecards';
const Pokebox = () => {
const [pokemon, setPokemon] = useState<any>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchData() {
//    Challenge use .then() instead of async/await
         const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        
        if (response.ok) {
            
            const data = await response.json();
            console.log(data.types[0].type.name);
            setPokemon(data);
        }
       
    }
    fetchData();
    
    console.log("hello world")
    
},[])  
  return (
    <div className='flex flex-col bg-normalGreyCard w-md rounded-xl border-4 border-black'>
        {/* upper */}
        <div className='flex justify-between p-2 border-b-2 border-black'>
            
            <h3 className='uppercase'>{pokemon ? (pokemon.name) : (<p>Loading...</p>)}</h3>

            <div className='flex gap-3'>
                <h3 >Level</h3>
                <h3 className='uppercase'>{pokemon ? (pokemon.types[0].type.name) : (<p>Loading...</p>)}</h3>
               
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