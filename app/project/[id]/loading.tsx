'use client'
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { TypeAnimation } from 'react-type-animation';


export default function Loading() {
  return (
    <div className='h-screen flex flex-col justify-between'>
    <Header />
    <section className=' bg-zinc-50 flex flex-grow items-center justify-center text-6xl'>
      <TypeAnimation 
        sequence={[
          'Loading.',
          1000,
          'Loading..',
          1000,
          'Loading...',
          1000
        ]}
        speed={50}
        repeat={Infinity}
      />
    </section>
    <Footer />
    </div>
  )
}