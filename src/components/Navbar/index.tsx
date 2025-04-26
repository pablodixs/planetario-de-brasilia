import Link from 'next/link'
import { NavbarLink } from './Link'

export function Navbar() {
    return (
        <nav className="flex gap-8">
            <NavbarLink href={'#'}>Sobre</NavbarLink>
            <NavbarLink href={'#'}>Programação</NavbarLink>
            <NavbarLink href={'#'}>Atrações</NavbarLink>
            <NavbarLink href={'#'}>Contato</NavbarLink>
            <Link
                className="px-3 py-2 bg-white/10 hover:bg-white hover:text-black rounded-md transition-all font-semibold"
                href={'/agendar'}
            >
                Agende uma visita
            </Link>
        </nav>
    )
}
