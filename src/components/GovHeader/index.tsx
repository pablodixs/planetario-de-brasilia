'use client'

import Link from 'next/link'
import { useState } from 'react'

export function GovHeader() {
    const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false)

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
                    <button
                        className="hover:text-white transition-all cursor-pointer"
                        onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                    >
                        {isMenuExpanded ? 'Mostrar menos' : 'Mostrar mais'}
                    </button>
                    <Link
                        className="hover:text-white transition-all"
                        href={'#'}
                    >
                        Acessibilidade
                    </Link>
                    <Link
                        className="hover:text-white transition-all"
                        href={'#'}
                    >
                        Portal do Governo do Distrito Federal
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
                <div className="pt-4">
                    <h1>Menu</h1>
                </div>
            </div>
        </section>
    )
}
