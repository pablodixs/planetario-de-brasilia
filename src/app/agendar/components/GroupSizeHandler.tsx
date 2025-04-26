import { Minus, Plus } from '@phosphor-icons/react/dist/ssr'
import { Dispatch } from 'react'

interface GroupSizeHandlerProps {
    groupSize: number
    setGroupSize: Dispatch<React.SetStateAction<number>>
}
export function GroupSizeHandler({
    setGroupSize,
    groupSize,
}: GroupSizeHandlerProps) {
    return (
        <section className="mt-6">
            <h2 className="font-bold text-2xl">Quantidade de pessoas</h2>
            <div className="flex items-center justify-between gap-4 mt-4 border p-4 rounded-lg border-neutral-800">
                <button
                    disabled={groupSize <= 1}
                    className="aspect-square w-10 bg-neutral-700 text-white hover:bg-white hover:text-black transition-all flex justify-center items-center rounded-sm cursor-pointer text-lg"
                    onClick={() => setGroupSize(groupSize - 1)}
                >
                    <Minus />
                </button>
                <span className="text-3xl font-medium text-center w-auto outline-none">
                    {groupSize} {groupSize > 1 ? 'visitantes' : 'visitante'}
                </span>
                <button
                    disabled={groupSize >= 50}
                    className="aspect-square w-10 bg-neutral-700 text-white hover:bg-white hover:text-black transition-all flex justify-center items-center rounded-sm cursor-pointer text-lg"
                    onClick={() => setGroupSize(groupSize + 1)}
                >
                    <Plus />
                </button>
            </div>
        </section>
    )
}
