"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../components/ui/popover"
import { countryCodes, type CountryCode }  from "../lib/country-codes"
import {
   Command, 
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList 
} from "./ui/command"


type CountryCodeSelectProps = {
  value?: string
  onValueChange: (value: string) => void
}

export function CountryCodeSelect({ value, onValueChange }: CountryCodeSelectProps) {
  const [open, setOpen] = React.useState(false)

  const selectedCountry = React.useMemo(() => {
    return countryCodes.find(
      (country) => country.dial_code === value
    )
  }, [value])


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-12 w-[130px] justify-between rounded-full"
        >
          <div className="flex items-center gap-2">
            {selectedCountry ? (
              <>
                <span className="text-xl">{selectedCountry.flag}</span>
                <span className="font-bold">{selectedCountry.dial_code}</span>
              </>
            ) : (
             "Select Country"
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countryCodes.map((country) => (
                <CommandItem
                  key={country.value}
                  value={`${country.flag} ${country.name} ${country.dial_code}`}
                  onSelect={() => {
                    onValueChange(country.dial_code)
                    setOpen(false)
                  }}
                >
                  <div className="flex justify-between w-full items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                    <span className="text-muted-foreground">{country.dial_code}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
