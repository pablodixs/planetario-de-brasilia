import Image from 'next/image'

import { Container } from '@/components/Container'
import { GovHeader } from '@/components/GovHeader'

import logo from '@/assets/images/logo.svg'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="fixed top-0 left-0 w-full bg-neutral-900/70 backdrop-blur-lg z-50">
                <GovHeader />
                <Container className="py-3">
                    <Image src={logo} alt="" className="w-35" />
                </Container>
            </section>
            <main className="pt-[8rem] flex justify-between gap-12 h-full w-full">
                <Container>{children}</Container>
            </main>
        </>
    )
}
