export function Button({
    children,
    ...props
}: {
    children: React.ReactNode
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={
                'bg-transparent text-white font-semibold rounded-md px-4 py-2 hover:bg-white hover:text-black flex items-center gap-2 transition-colors cursor-pointer'
            }
            {...props}
        >
            {children}
        </button>
    )
}
