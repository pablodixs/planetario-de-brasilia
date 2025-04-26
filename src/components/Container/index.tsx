export function Container({
    children,
    className,
}: {
    children?: React.ReactNode
    className?: string
}) {
    return (
        <section
            className={`max-w-[1280px] min-w-[1280px] w-full m-auto ${className}`}
        >
            {children}
        </section>
    )
}
