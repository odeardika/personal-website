import React from 'react'

export default function Header() {
  return (
    <header className="flex px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48 py-8 ">
        <div className="flex basis-1/2">
        <h3 className="text-2xl font-semibold">odeardika.</h3>
        </div>
        
        <nav className="flex basis-1/2 grow max-w-36  ">
          <div className='burger flex flex-col gap-2 visible md:invisible lg:invisible xl:invisible order-last'>
            <div className='w-10 h-1 bg-slate-600'/>
            <div className='w-10 h-1 bg-slate-600'/>
            <div className='w-10 h-1 bg-slate-600'/>
          </div>
          <ul className="invisible md:visible lg:visible xl:visible flex grow justify-end gap-8 text-base">
              <li className=''>Home</li>
              <li className=''>About</li>
              <li className=''>Skills</li>
              <li className=''>Project</li>
              <li className=''>Contact</li>
          </ul>
        </nav>

    </header>
  )
}