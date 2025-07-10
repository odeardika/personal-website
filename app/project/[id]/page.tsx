'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { Project } from '@/types/project';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

type Res = {
  status: number,
  message: string,
  data: Project | null,
}

const ProjectOverviewComponent = ({ text }: { text: string | undefined }) => {
  if (!text) return <></>
  const listParagraph = text.split('\n');
  // console.log(listParagraph);
  return (
  <>
    <div>
      {listParagraph.map((content, index) => (
        <p key={index} className='text-base md:text-lg lg:text-xl/9 font-light text-slate-600 my-4'>
          {content}
        </p>
      ))}
    </div>
  </>
  );
}

function Page({ params }: { params: Promise<{ id: string }> }) {
  const monthsDict: { [key: string]: string } = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  const [data, setData] = useState<Project>();
  const [month, setmonth] = useState("");
  const [year, setYear] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      const res = await fetch(`/api/project/${id}`);
      const parseRes: Res = await res.json();
      if (parseRes.message === "Id not found") {

      } else {
        if (parseRes.data) {
          setData(parseRes.data);
          const [y, m] = parseRes.data.created_at.split('-');
          setYear(y);
          setmonth(m);
        }
      }
    }
    fetchData();
  }, [params])

  const handleLoadingImage = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300)
  }
  return (
    <>
      <Header />
      <section className='bg-zinc-50 py-20 px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48'>
        <Link className='mb-8 flex items-center gap-2 hover:text-sky-500 hover:-translate-x-2 transition-transform duration-300' href={'/project'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
          <span>
            back to project
          </span>
        </Link>
        <h2 className='text-dark_blue text-2xl md:text-4xl font-black extra-w'>{data?.project_title}</h2>

        <div className='flex py-8 gap-4 items-center'>
          <div className='flex gap-2 items-center text-slate-600 font-semibold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <p>{`${monthsDict[`${month}`]} ${year}`}</p>
          </div>
          <Link href={data?.website_url ? data.website_url : ""} target="_blank" rel="noopener noreferrer" className='flex p-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/50 border-2 rounded-md items-center gap-1 hover:-translate-y-2 transition-transform duration-300 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
            </svg>
            <span>View on Page</span>
          </Link>
          <Link href={data?.github_url ? data.github_url : ""} target="_blank" rel="noopener noreferrer" className='flex w-auto p-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/50 border-2 rounded-md items-center gap-1 hover:-translate-y-2 transition-transform duration-300 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span>View on Github</span>
          </Link>
        </div>

        <div className='flex justify-center'>
          <div className='p-4 bg-white shadow-xl rounded-lg w-full md:w-[90%]'>
            {!isLoaded &&
              <div>
                <Skeleton className="h-[36rem] w-full" />
              </div>}
            <Image
              src={`${data?.project_img ? data.project_img : ""}`}
              width={2000}
              height={2000}
              alt=''
              className={`${isLoaded ? "" : "hidden"} w-full`}
              onLoad={handleLoadingImage} />
          </div>
        </div>

        <div className='py-8'>
          <h3 className='text-sky-500 font-black text-2xl md:text-4xl my-1'>Project Overview</h3>
          <ProjectOverviewComponent text={data?.project_overview} />
          {/* <p className='text-base md:text-xl font-light text-slate-400 my-4'>{data?.project_overview}</p> */}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page;