import React from 'react';
import Image from 'next/image';
import profile from "@/public/assets/images/about_img.png";
import Link from 'next/link';

export default function About() {
  return (
    <section
      data-aos="fade-up"
      className='flex flex-col items-center gap-8 md:h-screen  px-10 md:px-48' id='about-section'>
      <div className='flex flex-col gap-2 md:gap-4 items-center'>
        <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl md:extra-w text-dark_blue'>About Me</h2>
        <p className='text-dark_blue font-light text-xs md:text-base lg:text-xl'>My Introduction</p>
      </div>

      <div className='flex justify-between mt-4 flex-col md:flex-row items-center gap-4 md:gap-16'>
        <Image
          src={profile}
          alt='Profile Image'
          width={150} height={150}
          className='w-[36rem] h-52 rounded-2xl md:h-[36rem] md:w-auto bg-white' />

        <div className='flex flex-col items-center md:items-start flex-grow justify-between h-full py-16'>

          <div className='flex flex-col gap-5'>
            <p className='text-justify font-semibold text-slate-900 text-3xl'>I&apos;m Ode — a software developer with a background in Computer Science who enjoys turning ideas into real, working applications.</p>

            <p className='text-justify text-slate-500 text-lg'>I specialize in building full-stack web apps using <span className='text-sky-400'>React</span>, <span className='text-sky-400'>Node.js</span>, and modern tools like <span className='text-sky-400'>Tailwind CSS</span>. Clean code, beautiful UI, and solving real problems — <span className='italic'>that&apos;s what gets me excited.</span></p>

            <p className='text-justify text-slate-400 text-base'>I&apos;m always exploring new tech, and I enjoy diving into areas like <span className='text-sky-300'>machine learning</span> and <span className='text-sky-300'>design</span> when the project calls for it.</p>

            <p className='text-justify text-base text-slate-700 font-semibold'>Whether it’s front-end, back-end, or figuring out how to glue everything together — <span className='text-sky-500'>I just love building things that work.</span></p>

          </div>

          <div className='flex mt-8 md:mt-0'>
            <Link
              className='bg-dark_blue text-white py-3 md:py-4 px-8 text-sm font-semibold rounded-full md:rounded-2xl mt-4'
              href='https://drive.google.com/file/d/1Jr0f-HzK3KHaufRidvsMo1710aICksWa/view?usp=sharing'
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
