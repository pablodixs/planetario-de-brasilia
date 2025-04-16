import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'

const font = Instrument_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Planetário de Brasília Luiz Cruls',
    description: '----',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-bt">
            <body className={`${font} antialiased`}>{children}</body>
        </html>
    )
}
