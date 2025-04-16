import { Hero } from '@/components/Hero'
import Image from 'next/image'

import logo from '@/assets/images/logo.svg'
import Link from 'next/link'
import { GovHeader } from '@/components/GovHeader'

export default function Home() {
    return (
        <>
            <GovHeader />
            <section>
                <header>
                    <div className="flex justify-between items-center py-4 max-w-[1280px] mx-auto">
                        <Image
                            src={logo}
                            alt="Planetário de Brasília"
                            draggable={false}
                        />
                        <nav className="flex gap-12">
                            <Link href={'#'}>Sobre</Link>
                            <Link href={'#'}>Programação</Link>
                            <Link href={'#'}>Atrações</Link>
                            <Link href={'#'}>Contato</Link>
                            <Link href={'#'}>Agende uma visita</Link>
                        </nav>
                    </div>
                </header>
                <Hero />
            </section>
        </>
    )
}
