'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import PortfolioCard from '@components/Card/PortfolioCard/PortfolioCard';
import { PortfolioCardProps } from '@/types/portfolioCard';
import Link from 'next/link';

export default function Project() {
  const [project, setProject] = useState<PortfolioCardProps[]>([]);

  useEffect(() => {
    fetch('/api/project')
      .then(res => res.json())
      .then(data => setProject(data));
  }, [])
  return (
    <section data-aos="fade-up" id='project-section' className='flex flex-col items-center justify-center gap-8 py-24 bg-zinc-50'>
        <div className='flex flex-col gap-2 md:gap-4 items-center'>
            <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl text-dark_blue'>My Portfolio</h2>
            <p className='text-dark_blue font-light text-xs md:text-base lg:text-xl'>Recent Works</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 px-10 lg:px-48 xl:px-48'>
            {project.map((item, index) => (
                <PortfolioCard key={item.id} props={item} index={index} isAnimated={true} />
            ))}
        </div>

        <Link href="/project" className="bg-white text-xl rounded-full py-4 px-8 shadow-lg hover:-translate-y-2 transition-transform duration-300" >Show More</Link>
    </section>
  )
}
