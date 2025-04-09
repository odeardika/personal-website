import React from 'react';
import Image from 'next/image';
import { PortfolioCardProps } from '@/types/portfolioCard.types';

export default function PortfolioCard({props} : {props: PortfolioCardProps}) {
  return (
    <div className='bg-white rounded-[10px] w-80'>
        <Image src={props.image} alt="Project image" className='p-4 rounded-[20px]'/>
        <div className='px-4 pb-4'>
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <a className="text-sm font-light" href={props.link} target="_blank" rel="noopener noreferrer">Open</a>
        </div>
    </div>
  )
}
