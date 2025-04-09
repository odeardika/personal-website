import React from 'react';
import PortfolioCard from '@components/Card/PortfolioCard/PortfolioCard';

export default function Project() {
  return (
    <section className='flex flex-col items-center justify-center gap-8 py-20'>
        <div className='flex flex-col gap-2 md:gap-4 items-center'>
            <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl text-dark_blue'>My Portfolio</h2>
            <p className='text-dark_blue font-light text-xs md:text-base lg:text-xl'>Recent Works</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 px-10 lg:px-48 xl:px-48'>
            <PortfolioCard />
            <PortfolioCard />
        </div>
    </section>
  )
}
