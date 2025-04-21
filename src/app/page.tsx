import { Hero } from '@/components/Hero'
import Image from 'next/image'

import logo from '@/assets/images/logo.svg'
import { GovHeader } from '@/components/GovHeader'
import { Navbar } from '@/components/Navbar'

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
                        <Navbar />
                    </div>
                </header>
                <Hero />
            </section>
        </>
    )
}
