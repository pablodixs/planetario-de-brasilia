import Image from 'next/image'
import { GovHeader } from '../GovHeader'

import logo from '@/assets/images/logo.svg'
import { Navbar } from '../Navbar'

interface HeaderProps {
    showNavbar?: boolean
    smallLogo?: boolean
}

export function Header({ showNavbar = true, smallLogo = false }: HeaderProps) {
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
                            className={`${
                                smallLogo && 'w-30'
                            } transition-all duration-200`}
                        />
                        {showNavbar && <Navbar />}
                    </div>
                </header>
            </section>
        </>
    )
}
