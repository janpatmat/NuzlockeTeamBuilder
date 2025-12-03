"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CustomDropboxProps {
  value: string
  onChange: (val: string) => void
  pokemonData: { name: string }[]
  label?: string
}

const CustomDropbox: React.FC<CustomDropboxProps> = ({ value, onChange, pokemonData, label }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value ? value.charAt(0).toUpperCase() + value.slice(1) : "Select Pokémon..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Pokémon..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Pokémon found.</CommandEmpty>
              <CommandGroup>
                {pokemonData.map((pokemon) => (
                  <CommandItem
                    key={pokemon.name}
                    value={pokemon.name}
                    onSelect={(currentValue) => {
                      onChange(currentValue)
                      setOpen(false)
                    }}
                  >
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === pokemon.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CustomDropbox
