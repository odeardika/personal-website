import React from 'react';
import Image from 'next/image';
import { PortfolioCardProps } from '@/types/portfolioCard';
import Link from 'next/link';

const GithubButton = ({github_url = ""} : {github_url: string}) => {
  return <Link href={github_url} target="_blank" rel="noopener noreferrer" className='flex w-auto p-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/50 border-2 rounded-md items-center gap-1 hover:-translate-y-2 transition-transform duration-300 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span>View on Github</span>
          </Link>
  
}

const WebsiteButton = ({website_url = ""} : {website_url : string}) => {
  return <Link href={website_url} target="_blank" rel="noopener noreferrer" className='flex p-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/50 border-2 rounded-md items-center gap-1 hover:-translate-y-2 transition-transform duration-300 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
            </svg>
            <span>View on Page</span>
          </Link>
}

const ViewDetailsButton = ({project_id} : {project_id : number | string}) => {
  return <Link href={`/project/${[project_id]}`} rel="noopener noreferrer" className='flex p-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/50 border-2 rounded-md items-center gap-1 hover:-translate-y-2 transition-transform duration-300 '>
            <span>View Details</span>
          </Link>
}

export default function PortfolioCard({ props, index = 0, isAnimated = true }: { props: PortfolioCardProps, index: number, isAnimated : boolean }) {

  const originPosition = [
    'origin-top-left',
    'origin-top-right',
    'origin-bottom-left',
    'origin-bottom-right'
  ]
  return (
    <div className={`bg-white rounded-[10px] shadow-xl w-100 hover:cursor-pointer duration-300  transition-transform flex flex-col justify-between ${isAnimated? `${originPosition[index]} md:hover:scale-110` : `` }`}>

      <Image src={`${props.project_img}`} width={0} height={0} alt="Project image" unoptimized={true} className='p-4 w-full h-auto rounded-[20px]' />
      <div className='px-4 pb-4 flex flex-col flex-grow justify-between'>
        <div>
          <h3 className="text-2xl md:text-xl xl:text-2xl my-2 font-semibold text-dark_blue ">{props.project_title}</h3>
          <p className='text-base font-light text-slate-400 my-4'>{props.project_desc}</p>
        </div>
        <div className='flex gap-2 flex-row'>
          <ViewDetailsButton project_id={props.id} />
          {props.website_url? <WebsiteButton website_url={props.website_url}/> :
            props.github_url? <GithubButton github_url={props.github_url}/> : ""
          }
        </div>
      </div>
    </div>
  )
}
