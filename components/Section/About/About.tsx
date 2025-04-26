import React from 'react';
import Image from 'next/image';
import profile from "@public/assets/images/profile_img.png";
import Link from 'next/link';

export default function About() {
  const aboutDesc = `
I’m Ode, an undergraduate Informatics Student, Software Developer, Website Developer, and Machine Learning Developer. I’m looking forward to new experiences in software development and learning new technologies.
`.trim();
  return (
    <section className='px-10 md:px-5'>
      <div className='flex flex-col gap-2 md:gap-4 items-center'>
          <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl text-dark_blue'>About Me</h2>
          <p className='text-dark_blue font-light text-xs md:text-base lg:text-xl'>My Introduction</p>
      </div>

      <div className='flex justify-center mt-4 flex-col md:flex-row items-center gap-4 md:gap-16'>
        <Image 
        src={profile} 
        alt='Profile Image' 
        width={150} height={150} 
        className='w-36 rounded-2xl md:h-full md:w-auto' />
        <div className='flex flex-col items-center md:items-start md:w-4/12 md:gap-4'>
          <p className='text-justify text-slate-500 text-xl'>{aboutDesc}</p>
          <div className='flex mt-8 md:mt-0'>
            <Link 
            className='bg-dark_blue text-white py-3 md:py-4 px-8 text-sm font-semibold rounded-full md:rounded-2xl mt-4'
            href='/assets/doc/Ode Ardika CV.pdf' 
            target='_blank'
            >
              Download My CV
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
