'use client'

import React, { useState, ReactNode, FC } from 'react'
import { ToggleGroupContext } from './ToggleGroupContext'
import { ToggleItem } from './ToggleItem'

export interface ToggleGroupProps {
    defaultValue?: string
    value?: string
    onValueChange?: (value: string) => void
    children: ReactNode
}

export const ToggleGroup: FC<ToggleGroupProps> & {
    Item: typeof ToggleItem
} = ({ defaultValue, value, onValueChange, children }) => {
    const [internal, setInternal] = useState<string | null>(
        defaultValue ?? null
    )
    const selected = value !== undefined ? value : internal

    const handleChange = (val: string) => {
        if (value === undefined) setInternal(val)
        onValueChange?.(val)
    }

    return (
        <ToggleGroupContext.Provider
            value={{ selected, onValueChange: handleChange }}
        >
            <div role="group" className='flex flex-col gap-4 w-full'>{children}</div>
        </ToggleGroupContext.Provider>
    )
}

ToggleGroup.Item = ToggleItem
