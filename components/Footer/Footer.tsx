import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=' bg-white '>
        <div className='flex flex-col items-center justify-center gap-4 py-8'>
            <h2 className='text-2xl font-semibold'>odeardika.</h2>
            <ul className='flex gap-4'>
                <li className=''><Link href={'https://www.instagram.com/odeardika'} target='_blank'><FaInstagram className='w-6 h-6'/></Link></li>
                <li className=''><Link href={'https://github.com/odeardika'} target='_blank'><FaGithub className='w-6 h-6'/></Link></li>
                <li className=''><Link href={'https://www.linkedin.com/in/odeardika'} target='_blank'><FaLinkedin className='w-6 h-6' /></Link></li>
            </ul>
            <p className='text-sm font-light text-slate-500'>© 2025 Ode Ardika. All rights reserved.</p>

        </div>
    </footer>
  )
}
