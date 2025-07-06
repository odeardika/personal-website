'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import { PortfolioCardProps } from '@/types/portfolioCard';
import PortfolioCard from '@/components/Card/PortfolioCard/PortfolioCard';





function Page() {
  const [projects, setProjects] = useState<PortfolioCardProps[]>([]);
  const [searchBar, setSearchBar] = useState("");
  
    useEffect(() => {
      fetch('/api/project', {
        method : "POST",
        body : JSON.stringify({
          search : searchBar
        })
      })
        .then(res => res.json())
        .then(data => {
          setProjects(data)
          console.log(data);
        });
    }, [searchBar]);

    const handleOnTyping = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchBar(e.target.value);
    }
  return (
    <main className='bg-zinc-50'>
      <Header />
      <section className='search flex flex-col items-center gap-4 py-20 px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48'>
        <h2 className='text-5xl text-dark_blue font-bold'>My Project</h2>
        <h3>Explore a collection of my work</h3>

        <div className='search-bar flex text-base md:text-xl gap-4 py-4 w-full items-center'>
          <div className='px-5 md:px-10 py-3 md:py-5 border-slate-400 border-2 rounded-xl flex-grow flex text-slate-400 items-center gap-2 md:gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search h-4 w-4 md:h-6 md:w-6" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="text" className='w-full bg-transparent' placeholder='Search project by name' value={searchBar} onChange={handleOnTyping} />
          </div>

          <button className='bg-sky-500 text-white px-4 py-1 md:px-8 md:py-2 rounded-xl h-10 md:h-14'>
            Tags
          </button>

        </div>


      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 bg-zinc-50 w-full px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48'>
        {!(projects.length > 0)? "" : projects.map(project => (<PortfolioCard index={0} isAnimated={false} key={project.id} props={project}/>))}
      </div>

    </main>
  )
}

export default Page;