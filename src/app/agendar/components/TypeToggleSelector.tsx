'use client'

import { ToggleGroup, ToggleItem } from '@/components/ToggleGroup'
import { Dispatch } from 'react'

interface TypeToggleSelectorProps {
    currentValue?: string
    setGroupType: Dispatch<React.SetStateAction<string>>
}

export function TypeToggleSelector({
    setGroupType,
    currentValue,
}: TypeToggleSelectorProps) {
    return (
        <section>
            <h1 className="font-bold text-2xl mb-4">
                Escolha o tipo de visita
            </h1>
            <ToggleGroup
                value={currentValue}
                onValueChange={(value) => setGroupType(value)}
            >
                <ToggleItem
                    title="Pessoa física"
                    description="Visita individual, familiar ou grupos de até 10 pessoas."
                    value="grupo1"
                />
                <ToggleItem
                    title="Instituições de Ensino ou grupos maiores"
                    description="Visita de alunos de Instituições de Ensino ou grupos
                                        com mais de 10 pessoas."
                    value="grupo2"
                />
            </ToggleGroup>
        </section>
    )
}
