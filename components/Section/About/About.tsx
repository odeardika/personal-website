'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function About() {
  const skills = [
    { title: "Website Developer", tools: ["NextJS", "Svelte", "TailwindCSS"] },
    { title: "Software Developer", tools: ["Node.js", "TypeScript", "Python"] },
    { title: "Data Analyst", tools: ["Pandas", "NumPy", "Excel"] },
    { title: "Data Engineer", tools: ["Pandas", "NumPy", "Excel"] },
    { title: "Machine Learning Engineer", tools: ["scikit-learn", "TensorFlow", "PyTorch"] },
  ];
  return (
    <section
      data-aos="fade-up"
      className='flex flex-col items-center gap-4 h-screen about-bg justify-center'
      id='about-section'
    >
      <div className="max-w-screen-2xl mx-auto px-10 md:px-24 lg:px-48 w-full">
        <div className='flex flex-col gap-2 md:gap-4 items-center'>
          <h2 className='font-semibold text-4xl md:text-4xl lg:text-5xl md:extra-w text-dark_blue'>About Me</h2>
          <p className='text-dark_blue font-light text-xs md:text-base lg:text-xl'>My Introduction</p>
        </div>

        <div className='flex mt-4 flex-col md:flex-row gap-4 justify-end md:gap-16'>
          <div className='flex flex-col gap-5 md:gap-10 items-center md:items-start w-[100%] md:w-[55%] lg:w-[53%] justify-between h-full md:py-16'>

            <div className='flex flex-col gap-3'>
              <h3 className='text-justify font-semibold text-slate-900 text-2xl md:text-2xl lg:text-4xl'>I&apos;m Ode Ardika</h3>

              <p className='text-slate-500 md:text-slate-400 text-base md:text-base lg:text-lg'>A software developer with a background in Computer Science, passionate about turning ideas into real, working applications. I specialize in building full-stack web apps and other software with a strong focus on clean code, elegant design, and solving real problems. Want to know more? <Link
                className=' text-slate-700 inline-block bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-sky-500 transition-[background-size,color] duration-500 ease-out cursor-pointer'
                href='https://drive.google.com/file/d/1Jr0f-HzK3KHaufRidvsMo1710aICksWa/view?usp=sharing'
                target='_blank'
              >Click here to checkout my CV</Link>. </p>
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='text-justify font-semibold text-slate-900 text-2xl md:text-2xl lg:text-4xl'>My Skill</h3>
              <ul className=" text-slate-400 text-base md:text-sm lg:text-lg mt-2 flex gap-2 flex-wrap">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className='text-sky-600 border-sky-600 border-2 bg-sky-100 p-2 md:p-4 rounded-lg transition-all delay-200'
                  >{skill.title}</motion.div>))}

              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
