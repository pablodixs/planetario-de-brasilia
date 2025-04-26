import { Warning } from '@phosphor-icons/react/dist/ssr'

interface ErrorMessagesCalloutProps {
    groupType: string
    groupSize: number
}

export function ErrorMessagesCallout({
    groupSize,
    groupType,
}: ErrorMessagesCalloutProps) {
    return (
        <div className="text-red-400 mt-4">
            {groupType === 'grupo1' && groupSize > 10 && (
                <span className="flex gap-2 items-center">
                    <Warning size={20} /> A quantidade máxima nessa categoria
                    são 10 visitantes.
                </span>
            )}
            {groupType === 'grupo2' && groupSize <= 10 && (
                <span className="flex gap-2 items-center">
                    <Warning size={20} /> A quantidade mínima nessa categoria
                    são 11 visitantes.
                </span>
            )}
        </div>
    )
}
