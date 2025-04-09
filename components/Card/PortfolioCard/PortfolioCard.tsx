import React from 'react';
import Image from 'next/image';
import tempImage from "@public/assets/images/temp.jpg";

export default function PortfolioCard() {
  return (
    <div className='bg-white rounded-[10px] w-80'>
        <Image src={tempImage} alt="Project image" className='p-4 rounded-[20px]'/>
        <div className='px-4 pb-4'>
        <h3 className="text-lg font-semibold">Project Title</h3>
        <a className="text-sm font-light" href='#'>Open</a>
        </div>
    </div>
  )
}
