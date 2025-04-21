'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
    PersonArmsSpread,
    CaretDown,
    ArrowUpRight,
} from '@phosphor-icons/react'

export function GovHeader() {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false)

    return (
        <section className="border-b border-neutral-900 py-2">
            <div className="flex justify-between items-center max-w-[1280px] mx-auto text-sm text-neutral-400">
                <Link
                    className="font-semibold hover:text-white transition-all"
                    href={'#'}
                >
                    Secretaria de Ciência, Tecnologia e Inovação
                </Link>
                <div className="flex gap-10">
                    <button className="hover:text-white transition-all flex items-center gap-1">
                        Acessibilidade
                        <PersonArmsSpread size={'1.125rem'} />
                    </button>
                    <button
                        className="hover:text-white transition-all flex items-center gap-1"
                        onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                    >
                        Mais
                        <CaretDown
                            className={`${
                                isMenuExpanded ? 'rotate-180' : 'rotate-0'
                            } transition-all`}
                            size={'1.125rem'}
                        />
                    </button>
                    <Link
                        className="hover:text-white transition-all flex items-center gap-1"
                        href={'#'}
                    >
                        Portal do Governo do Distrito Federal
                        <ArrowUpRight size={'1.125rem'} />
                    </Link>
                </div>
            </div>
            <div
                className={`
                    overflow-hidden
                    transition-[height] duration-300 ease-in-out 
                    ${isMenuExpanded ? 'h-10' : 'h-0'} max-w-[1280px] mx-auto
                `}
            >
                <h1>Menu</h1>
            </div>
        </section>
    )
}
