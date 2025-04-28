'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import {
    CaretLeft,
    CaretRight,
    Hexagon,
    UsersThree,
} from '@phosphor-icons/react/dist/ssr'

import { Container } from '@/components/Container'

import { GroupSizeHandler } from './components/GroupSizeHandler'
import { TypeToggleSelector } from './components/TypeToggleSelector'
import { ErrorMessagesCallout } from './components/ErrorMessagesCallout'
import { DatePicker } from '@/components/DatePicker'
import { TimePicker } from '@/components/HourPicker'

export default function Agendar() {
    const [groupType, setGroupType] = useState<string>('')
    const [groupSize, setGroupSize] = useState<number>(1)
    const [currentStep, setCurrentStep] = useState<number>(1)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [time, setTime] = useState<string>()

    // // Exemplo de disponibilidade: só dias pares do mês disponíveis
    // const disponibilidade = Array.from({ length: 31 }, (_, i) => {
    //     const dia = i + 1
    //     const date = new Date()
    //     date.setDate(dia)
    //     const iso = date.toISOString().split('T')[0]
    //     return { date: iso, available: dia % 2 === 0 }
    // })

    const disableNextButton =
        (groupType === 'grupo1' && groupSize > 10) ||
        (groupType === 'grupo2' && groupSize <= 10) ||
        groupSize < 1 ||
        groupSize > 50

    return (
        <>
            <div>
                <h1 className="font-medium text-neutral-300 mb-1">
                    Agendar visita ao Planetário
                </h1>
                {currentStep === 1 && (
                    <>
                        <TypeToggleSelector
                            currentValue={groupType}
                            setGroupType={setGroupType}
                        />
                        {groupType && (
                            <GroupSizeHandler
                                groupSize={groupSize}
                                setGroupSize={setGroupSize}
                            />
                        )}
                        <div>
                            <ErrorMessagesCallout
                                groupSize={groupSize}
                                groupType={groupType}
                            />
                        </div>
                    </>
                )}
                {currentStep === 2 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full"
                    >
                        <h1 className="font-bold text-2xl mb-4">
                            Informações do grupo
                        </h1>
                        <form className="">
                            <label
                                htmlFor=""
                                className="mb-1 block text-sm text-neutral-400"
                            >
                                Nome completo
                            </label>
                            <input
                                className="rounded-lg border border-neutral-800 w-full px-4 py-2 mb-4 hover:border-neutral-500 focus:border-white focus:outline-none transition-all"
                                type="text"
                                placeholder="Seu nome completo"
                            />
                            <label
                                htmlFor=""
                                className="mb-1 block text-sm text-neutral-400"
                            >
                                E-mail
                            </label>
                            <input
                                className="rounded-lg border border-neutral-800 w-full px-4 py-2 mb-4 hover:border-neutral-500 focus:border-white focus:outline-none transition-all"
                                type="email"
                                placeholder="Seu e-mail"
                            />
                            {groupType === 'grupo2' && (
                                <div>
                                    <label
                                        htmlFor=""
                                        className="mb-1 block text-sm text-neutral-400"
                                    >
                                        Nome da instituição de ensino
                                    </label>
                                    <input
                                        className="rounded-lg border border-neutral-800 w-full px-4 py-2 mb-4 hover:border-neutral-500 focus:border-white focus:outline-none transition-all"
                                        type="text"
                                        placeholder="Nome da instituição de ensino"
                                    />
                                </div>
                            )}
                            <p className="text-sm text-neutral-400">
                                Ao continuar você aceita nossos Termos de Uso e
                                a Política de Privacidade.
                            </p>
                        </form>
                    </motion.div>
                )}

                {currentStep === 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full"
                    >
                        <h2 className="font-bold text-2xl">
                            Selecione a data da visita
                        </h2>
                        <div className="flex justify-between mt-4 gap-[10%]">
                            <DatePicker
                                selectedDate={selectedDate}
                                onDateChange={(d) => setSelectedDate(d)}
                            />
                            <div>
                                {selectedDate && (
                                    <TimePicker
                                        selectedTime={time}
                                        onTimeChange={setTime}
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
            {groupType && (
                <motion.div
                    initial={{ translateY: '100%' }}
                    animate={{ translateY: '0' }}
                    transition={{ bounceDamping: 0 }}
                    className="fixed bottom-0 left-0 w-full py-8 border-t border-neutral-800 bg-neutral-900/70 backdrop-blur-lg z-50"
                >
                    <Container className="flex justify-between items-center">
                        <div>
                            <h2 className="font-medium">Resumo</h2>
                            <div className="flex gap-4">
                                <span className="text-neutral-300 flex items-center gap-2">
                                    <UsersThree size={20} /> {groupSize}{' '}
                                    {groupSize > 1 ? 'visitantes' : 'visitante'}
                                </span>
                                <span className="text-neutral-300 flex items-center gap-2">
                                    <Hexagon size={20} />{' '}
                                    {groupType === 'grupo1' &&
                                        'Visita individual, familiar ou grupos de até 10 pessoas.'}
                                    {groupType === 'grupo2' &&
                                        'Visita de alunos de Instituições de Ensino ou grupos com mais de 10 pessoas.'}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {currentStep > 1 && (
                                <button
                                    onClick={() =>
                                        setCurrentStep(currentStep - 1)
                                    }
                                    className="bg-transparent text-neutral-400 text-lg rounded-lg py-2 px-6 hover:bg-neutral-700 hover:text-white transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
                                >
                                    <CaretLeft weight="bold" size={20} /> Voltar
                                </button>
                            )}
                            <button
                                onClick={() => setCurrentStep(currentStep + 1)}
                                disabled={disableNextButton}
                                className="bg-white text-black text-lg rounded-lg py-2 px-6 hover:bg-neutral-700 hover:text-white transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
                            >
                                Continuar <CaretRight weight="bold" size={20} />
                            </button>
                        </div>
                    </Container>
                </motion.div>
            )}
        </>
    )
}
