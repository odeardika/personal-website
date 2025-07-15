import React from 'react';

function TechStacksIcon({name, path} : {name : string, path : string}) {
    // const tech = icons[iconId];
    return (
        <div className='min-h-32 min-w-36 flex flex-col items-center justify-center shadow-md rounded-lg p-4 flex-wrap gap-4 hover:shadow-sky-100 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300'>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='sky-color h-12 w-12'>
                <path d={path} />
            </svg>
            <label className='text-center'>{name}</label>
        </div>
    )
}

export default TechStacksIcon;