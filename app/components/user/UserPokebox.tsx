import React from 'react'
import {useState, useEffect} from 'react'
import Image from 'next/image';

interface PokemonParty{
  name: string|null;
}

const UserPokebox:React.FC <PokemonParty> = ({name}) => {

  const [pokeDetail, setpokeDetail] = useState<any[]>([]);

  console.log(name);

  useEffect(() =>{
    const fetchPokedetail = async () =>{
      try{
        await fetch(`https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`)
  .then(res => res.json())
  .then(data => {
    setpokeDetail([
      { 
        name: data.name, 
        type: data.types,
        sprite: data.sprites.front_default
      }
    ]);
  });

      }catch (err){
        console.log(`Failed to fetch data ${err}`)
      }
    }
   fetchPokedetail();
  },[name])

 
  return (
   
    <div className='bg-red-400 w-xs flex flex-col items-center justify-center border-2 border-black rounded-lg'>
      <div className={pokeDetail[0]?.name ?'flex justify-between uppercase  w-full px-5 border-b-2 border-black' : 'font-bold'}>
     
      
      <h1>{pokeDetail[0]?.name ? pokeDetail[0].name : "Add your pokemon"}</h1>

      <div className='flex gap-4'>
      {pokeDetail[0]?.type.map( (x: any) =>
    
        <h3 key={x.type.name}>{x.type.name}</h3>
        
      )}
      </div>
      </div>
      <div>
  {pokeDetail[0]?.sprite && (
    <Image
      src={pokeDetail[0].sprite}
      alt={pokeDetail[0].name}
      width={150}
      height={150}
    />
  )}
</div>

    </div>
  )
}

export default UserPokebox