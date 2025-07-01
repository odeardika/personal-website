import React from 'react';
import Image from 'next/image';
import { PortfolioCardProps } from '@/types/portfolioCard';

export default function PortfolioCard({props} : {props: PortfolioCardProps}) {
  return (
    <div className='bg-white rounded-[10px] w-100'>
        <Image src={`${props.preview_img}`} width={0} height={0} alt="Project image"  unoptimized={true}  className='p-4 w-full h-auto rounded-[20px]'/>
        <div className='px-4 pb-4'>
        <h3 className="text-lg font-semibold">{props.project_title}</h3>
        <a className="text-sm font-light hover:underline hover:text-gray-500" href={`${props.website_url}`} target="_blank" rel="noopener noreferrer">Open</a>
        </div>
    </div>
  )
}
