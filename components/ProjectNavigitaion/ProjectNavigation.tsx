import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';

type Res = {
    status: number,
    message: string,
    data: Project | null,
};

function ProjectNavigation({ currentId }: { currentId: number }) {
    const [prevProject, setPrevProject] = useState<Project>();
    const [nextProject, setNextProject] = useState<Project>();
    const [showPrev, setShowPrev] = useState(true);
    const [showNext, setShowNext] = useState(true);
    const [navigationBehaviour, setNavigationBehaviour] = useState('justify-between');

    useEffect(() => {
        const handlePrevData = async () => {
            if (currentId - 1 === 0) {
                setShowPrev(false);
                setNavigationBehaviour('justify-end')
            } else {
                const res = await fetch(`/api/project/${currentId - 1}`);
                const parseRes: Res = await res.json();

                // Handle Project's Data
                if (parseRes.message === "Id not found") {

                } else {
                    if (parseRes.data) {
                        setPrevProject(parseRes.data);

                    }
                }
            }
        }
        handlePrevData();

        const handleNextProject = async () => {
            const res = await fetch(`/api/project/${currentId + 1}`)
            const parsenRes: Res = await res.json();

            // Handle Project's data
            if (parsenRes.message === "Id not found") {
                setShowNext(false);
            } else {
                if (parsenRes.data) {
                    setNextProject(parsenRes.data)
                }
            }
        }
        handleNextProject();

    }, [currentId])

    return (
        <div className={`flex  ${navigationBehaviour}`}>
            {showPrev &&
                <Link className='flex gap-4 items-center group' href={`/project/${currentId ? currentId - 1 : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left group-hover:text-sky-500 group-hover:-translate-x-2 transition-transform duration-300" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    <div className='flex flex-col items-start'>
                        <span className='text-sm text-slate-500'>Previous Project</span>
                        <span className='text-xl font-black group-hover:text-sky-500 transition-transform duration-300'>{prevProject?.project_title}</span>
                    </div>
                </Link>
            }
            {showNext &&
                <Link className='flex gap-4 items-center group' href={`/project/${currentId ? currentId + 1 : ""}`}>
                    <div className='flex flex-col items-end'>
                        <span className='text-sm text-slate-500'>Next Project</span>
                        <span className='text-xl font-black group-hover:text-sky-500 transition-transform duration-300'>{nextProject?.project_title}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right group-hover:text-sky-500 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </Link>
            }
        </div>
    )
}

export default ProjectNavigation