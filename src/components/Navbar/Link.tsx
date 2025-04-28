import Link from 'next/link'

interface NavbarLinkProps {
    href: string
    children: React.ReactNode
}

export function NavbarLink({ children, href }: NavbarLinkProps) {
    return (
        <Link
            className="px-3 py-2 bg-transparent hover:bg-white/10 rounded-md transition-all hover:backdrop-blur-lg"
            href={href}
        >
            {children}
        </Link>
    )
}
