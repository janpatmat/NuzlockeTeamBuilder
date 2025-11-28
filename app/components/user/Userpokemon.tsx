"use client";
import React from 'react'
import { useState, useEffect } from 'react'
import UserPokebox from './UserPokebox';
import Modal from '../modal/Modal';

const Userpokemon = () => {
  const [userPokemon, setUserPokemon] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("http://localhost:8080/api");
        const data = await response.json();
        
        setUserPokemon(data);
      } catch (error) {
        console.error("Error fetching user pokemon:", error);
      }
    };
    fetchPokemon();
  }, []);
  
 

  return (
    <div>
      
    
      <div className='grid grid-rows-2 grid-cols-3 w-1/2 gap-10'>
        <UserPokebox name={userPokemon[0]?.pokemon1}/>
        <UserPokebox name={userPokemon[0]?.pokemon2}/>
        <UserPokebox name={userPokemon[0]?.pokemon3}/>
        <UserPokebox name={userPokemon[0]?.pokemon4}/>
        <UserPokebox name={userPokemon[0]?.pokemon5}/>
        <UserPokebox name={userPokemon[0]?.pokemon6}/>
      </div>
      
    <Modal />
    
     
    </div>
  )
}

export default Userpokemon