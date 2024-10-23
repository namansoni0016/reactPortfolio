import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { IoMail } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/"><h3 className='text-3xl font-semibold mx-2 w-10'>NS</h3></a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/naman-soni-016/" target='_blank'><FaLinkedin/></a>
                <a href="https://github.com/namansoni0016" target='_blank'><FaGithub/></a>
                <a href="mailto:namantsoni@gmail.com"><IoMail/></a>
            </div>
        </nav>
    )
}

export default Navbar