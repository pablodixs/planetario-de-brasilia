import Image from 'next/image'
import Link from 'next/link'
import { House } from '@phosphor-icons/react/dist/ssr'

import { Container } from '@/components/Container'
import { GovHeader } from '@/components/GovHeader'

import logo from '@/assets/images/logo.svg'
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="fixed top-0 left-0 w-full bg-neutral-900/70 backdrop-blur-lg z-50">
                <GovHeader />
                <Container className="py-3 flex justify-between items-center">
                    <Image src={logo} alt="" className="w-35" />
                    <Link
                        className="text-sm text-neutral-300 flex gap-2 items-center hover:text-white transition-all"
                        href={'/'}
                    >
                        <House size={18} /> Voltar à Página Inicial
                    </Link>
                </Container>
            </section>
            <main className="pt-[8rem] flex justify-between gap-12 h-full w-full">
                <Container>{children}</Container>
            </main>
        </>
    )
}
