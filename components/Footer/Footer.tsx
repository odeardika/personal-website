import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=' bg-white '>
        <div className='flex flex-col items-center justify-center gap-4 py-8'>
            <h2 className='text-2xl font-semibold'>odeardika.</h2>
            <ul className='flex gap-4'>
                <li className=''><FaInstagram className='w-6 h-6'/></li>
                <li className=''><FaGithub className='w-6 h-6'/></li>
                <li className=''><FaLinkedin className='w-6 h-6' /></li>
            </ul>
            <p className='text-sm font-light text-slate-500'>© 2023 Ode Ardika. All rights reserved.</p>

        </div>
    </footer>
  )
}
