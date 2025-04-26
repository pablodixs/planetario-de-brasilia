import { createContext } from 'react'

export interface ToggleGroupContextProps {
    selected: string | null
    onValueChange: (value: string) => void
}

export const ToggleGroupContext = createContext<
    ToggleGroupContextProps | undefined
>(undefined)
