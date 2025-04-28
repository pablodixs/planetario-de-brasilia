interface TimePickerProps {
    selectedTime?: string
    onTimeChange: (time: string) => void
}

export function TimePicker({ selectedTime, onTimeChange }: TimePickerProps) {
    const slots = Array.from({ length: 12 }, (_, i) => {
        const hour = i + 8
        return `${hour.toString().padStart(2, '0')}:00`
    })

    return (
        <div className="min-w-1/2">
            <h1 className="font-semibold text-lg text-neutral-400">
                Horários disponíveis
            </h1>
            <div className="flex-wrap flex gap-4 mt-4">
                {slots.map((time) => {
                    const isSelected = time === selectedTime
                    const classes =
                        'p-4 min-w-[100px] rounded-lg cursor-pointer flex items-center justify-center border border-neutral-800 transition-colors ' +
                        (isSelected
                            ? ' bg-white text-black '
                            : ' hover:bg-neutral-900 ')

                    return (
                        <button
                            key={time}
                            onClick={() => onTimeChange(time)}
                            className={classes}
                        >
                            {time}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
