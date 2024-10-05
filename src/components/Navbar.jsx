import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { IoMail } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <h3 className='text-3xl font-semibold mx-2 w-10'>NS</h3>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin/>
                <FaGithub/>
                <IoMail/>
            </div>
        </nav>
    )
}

export default Navbar