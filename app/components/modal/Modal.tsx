"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import CustomDropbox from "./CustomDropbox"

const Modal = () => {
  const [pokemonData, setPokemonData] = useState<{ name: string }[]>([])
  const [selectedPokemons, setSelectedPokemons] = useState<string[]>(["", "", "", "", "", ""])

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const data = await response.json()
        setPokemonData(data.results)
      } catch (error) {
        console.error("Error fetching Pokémon data:", error)
      }
    }
    fetchPokemon()
  }, [])

  const handleChange = (index: number, value: string) => {
    const updated = [...selectedPokemons]
    updated[index] = value
    setSelectedPokemons(updated)
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  console.log("Selected Pokémon:", selectedPokemons)

  try {
    const res = await fetch("http://localhost:8080/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userid: 2, pokemons: selectedPokemons }),
    })

    if (!res.ok) throw new Error("Failed to update Pokémon")
    
    alert("Pokémon updated successfully!")
    

    window.location.reload()
  } catch (error) {
    console.error(error)
    alert("Error updating Pokémon")
  }
}


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Your Pokémon Team</DialogTitle>
          <DialogDescription>
            Choose 6 Pokémon for your team
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {[...Array(6)].map((_, idx) => (
            <CustomDropbox
              key={idx}
              value={selectedPokemons[idx]}
              onChange={(val) => handleChange(idx, val)}
              pokemonData={pokemonData}
              label={`Pokémon ${idx + 1}`}
            />
          ))}

          <DialogFooter>
            <Button type="submit" className="mr-2">Submit</Button>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
