import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import React, { useState } from 'react'

interface AvailabilityItem {
    date: string // Formato ISO: 'YYYY-MM-DD'
    available: boolean
}

interface DatePickerProps {
    selectedDate?: Date
    onDateChange: (date: Date) => void
    availability?: AvailabilityItem[]
}

export function DatePicker({
    selectedDate,
    onDateChange,
    availability = [],
}: DatePickerProps) {
    const [currentMonth, setCurrentMonth] = useState(
        new Date(
            selectedDate
                ? selectedDate.getFullYear()
                : new Date().getFullYear(),
            selectedDate ? selectedDate.getMonth() : new Date().getMonth(),
            1
        )
    )

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const startOfMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
    )
    const endOfMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        0
    )

    const daysInMonth = Array.from(
        { length: endOfMonth.getDate() },
        (_, i) =>
            new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
    )

    const isAvailable = (date: Date) => {
        const iso = date.toISOString().split('T')[0]
        const item = availability.find((a) => a.date === iso)
        return item ? item.available : true
    }

    const handlePrevMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
        )
    }

    const handleNextMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
        )
    }

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4 border border-neutral-800 rounded-lg p-1">
                <button
                    onClick={handlePrevMonth}
                    className="p-2 aspect-square cursor-pointer bg-neutral-900 rounded-md hover:bg-neutral-800 transition-all"
                >
                    <CaretLeft size={20} weight="bold" />
                </button>
                <span className="text-lg font-semibold capitalize">
                    {currentMonth.toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                    })}
                </span>
                <button
                    onClick={handleNextMonth}
                    className="p-2 aspect-square cursor-pointer bg-neutral-900 rounded-md hover:bg-neutral-800 transition-all"
                >
                    <CaretRight size={20} weight="bold" />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-4 mb-2">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, idx) => (
                    <div
                        key={`${d}-${idx}`}
                        className="text-center font-medium text-sm"
                    >
                        {d}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-4">
                {Array.from({ length: startOfMonth.getDay() }).map((_, idx) => (
                    <div key={`empty-${idx}`} />
                ))}

                {daysInMonth.map((day) => {
                    const iso = day.toISOString().split('T')[0]
                    const dayCopy = new Date(day)
                    dayCopy.setHours(0, 0, 0, 0)

                    const isPast = dayCopy < today
                    const available = !isPast && isAvailable(day)
                    const isSelected =
                        selectedDate &&
                        iso === selectedDate.toISOString().split('T')[0]
                    const isToday = iso === today.toISOString().split('T')[0]

                    let classes =
                        'p-2 rounded-lg transition-colors aspect-square cursor-pointer flex items-center justify-center border border-neutral-800 '
                    if (isSelected) classes += ' bg-white text-black '
                    else if (isToday) classes += ' bg-neutral-800 '
                    else classes += ' hover:bg-neutral-900 '

                    if (!available) classes += ' opacity-50 cursor-not-allowed '

                    return (
                        <button
                            key={iso}
                            onClick={() => available && onDateChange(day)}
                            disabled={!available}
                            className={classes}
                        >
                            {day.getDate()}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
