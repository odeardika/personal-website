import React from 'react';

type categoryComp = {
    offText: string;
    onText: string;
    condition: boolean;
    onClick: () => void;
}

export default function CategoryComp(props: categoryComp) {
    return (
        <>
            <li 
            onClick={props.onClick}
            className={`p-1 text-xs md:text-xl text-center rounded-md transition-all transition-discrete duration-500 delay-75 ease-in-out text-dark_blue font-semibold hover:cursor-pointer ${props.condition? "bg-dark_blue text-white" : ""}`}
            >{props.condition ? props.onText : props.onText}</li>
        </>
    )
}
