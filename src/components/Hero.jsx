import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/pic.jpeg';
import { motion } from "framer-motion";
import resume from '../assets/resume.pdf';

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const pdfFunction = () => {
    window.open(resume, '_blank');
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Naman Soni Resume.pdf';
    link.click();
}

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Naman Soni</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                        <motion.button onClick={pdfFunction} variants={container(1.5)} initial="hidden" animate="visible"
                            className='bg-neutral-900 hover:bg-neutral-800 focus:outline-none font-medium rounded-lg px-5 py-2.5 me-2 text-sm mb-5'>Download Resume</motion.button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration: 1, delay: 1.2 }}
                            className='rounded-2xl' src={profilePic} alt='Naman Soni'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero