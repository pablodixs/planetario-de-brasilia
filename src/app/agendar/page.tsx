'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CaretRight } from '@phosphor-icons/react'

import { Container } from '@/components/Container'
import { GovHeader } from '@/components/GovHeader'

import { GroupSizeHandler } from './components/GroupSizeHandler'
import { TypeToggleSelector } from './components/TypeToggleSelector'
import { ErrorMessagesCallout } from './components/ErrorMessagesCallout'

import logo from '@/assets/images/logo.svg'

export default function Agendar() {
    const [groupType, setGroupType] = useState<string>('')
    const [groupSize, setGroupSize] = useState<number>(1)
    const [currentStep, setCurrentStep] = useState<number>(1)

    const disableNextButton =
        (groupType === 'grupo1' && groupSize > 10) ||
        (groupType === 'grupo2' && groupSize <= 10) ||
        groupSize < 1 ||
        groupSize > 50

    return (
        <>
            <section className="fixed top-0 left-0 w-full bg-neutral-900/70 backdrop-blur-lg z-50">
                <GovHeader />
                <Container className="py-3">
                    <Image src={logo} alt="" className="w-35" />
                </Container>
            </section>
            <Container className="pt-[8rem] flex justify-between gap-12 h-full w-full">
                <div>
                    <h1 className="font-medium text-neutral-300 mb-1">
                        Agendar visita ao Planetário
                    </h1>
                    {currentStep === 1 && (
                        <>
                            <TypeToggleSelector setGroupType={setGroupType} />
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
                        <div className="w-full">
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
                                    className="rounded-lg border border-neutral-800 w-full px-4 py-2 mb-4"
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
                                    className="rounded-lg border border-neutral-800 w-full px-4 py-2 mb-4"
                                    type="text"
                                    placeholder="Seu e-mail"
                                />
                            </form>
                        </div>
                    )}
                </div>

                {groupType && (
                    <div className="sticky top-[8rem] w-[500px] h-[calc(100vh-30%)] p-4 border border-neutral-800 rounded-xl">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-2xl">Resumo</h2>
                            <p>Quantidade: {groupSize} visitantes.</p>
                            <p>
                                {groupType === 'grupo1' &&
                                    'Visita individual, familiar ou grupos de até 10 pessoas.'}
                                {groupType === 'grupo2' &&
                                    'Visita de alunos de Instituições de Ensino ou grupos com mais de 10 pessoas.'}
                            </p>
                            <button
                                onClick={() => setCurrentStep(currentStep + 1)}
                                disabled={disableNextButton}
                                className="bg-white text-black text-lg rounded-lg px-2 py-4 mt-4 hover:bg-neutral-700 hover:text-white transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
                            >
                                Continuar <CaretRight weight="bold" size={20} />
                            </button>
                        </div>
                    </div>
                )}
            </Container>
        </>
    )
}
