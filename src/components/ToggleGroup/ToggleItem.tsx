'use client'

import React, { FC, ReactNode, useContext } from 'react'
import { ToggleGroupContext } from './ToggleGroupContext'

export interface ToggleItemProps {
    title: string
    description?: string
    value: string
    children?: ReactNode
}

export const ToggleItem: FC<ToggleItemProps> = ({
    value,
    children,
    title,
    description,
}) => {
    const context = useContext(ToggleGroupContext)
    if (!context)
        throw new Error('ToggleItem must be used within a ToggleGroup')

    const { selected, onValueChange } = context
    const isActive = selected === value

    return (
        <button
            type="button"
            aria-pressed={isActive}
            onClick={() => onValueChange(value)}
            className={`w-full border border-neutral-700 rounded-lg p-4 flex flex-col items-start text-left transition-all hover:border-neutral-500 cursor-pointer ${
                isActive && 'bg-neutral-900 border-white hover:border-white'
            } ${!isActive && selected && 'opacity-60'}`}
        >
            <strong className="font-semibold">{title}</strong>
            {description && (
                <span className="text-neutral-300 text-sm">{description}</span>
            )}
            {children}
        </button>
    )
}
