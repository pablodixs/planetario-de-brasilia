'use client'

import { motion } from 'motion/react'

import { Header } from '../Header'

export function Hero() {
    return (
        <motion.section
            transition={{ duration: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-screen overflow-hidden"
        >
            <section className="h-screen w-full absolute  top-0 left-0 z-10">
                <Header />
                <div className="flex justify-center items-center h-full">
                    <motion.h1
                        initial={{
                            translateY: '100%',
                            opacity: 0,
                            filter: 'blur(20px)',
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        animate={{
                            translateY: '-100%',
                            opacity: 1,
                            filter: 'blur(0px)',
                        }}
                        className="text-neutral-100 text-[6rem] font-bold"
                    >
                        Uma viagem pelo espaço-tempo
                    </motion.h1>
                </div>
            </section>
            <div className="absolute top-0 left-0 w-full h-full object-cover">
                <motion.video
                    initial={{ opacity: 0, filter: 'blur(20px)' }}
                    transition={{ duration: 0.75, delay: 1 }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    muted
                    autoPlay
                    loop={true}
                    src="/videos/nebulosa.mp4"
                ></motion.video>
            </div>
        </motion.section>
    )
}
