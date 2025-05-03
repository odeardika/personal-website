'use client';
import { useState } from "react";
import CategoryComp from "./CategoryComp/CategoryComp";
import SkillList from "./SkillList/SkillList";


export default function Skills() {
    const [machileLearningCat, setMachileLearningCat] = useState(true);
    const [frontendCat, setFrontendCat] = useState(false);
    const [backendCat, setBackendCat] = useState(false);
    const [fullstackCat, setFullstackCat] = useState(false);
    const [allCat, setAllCat] = useState(false);

    const MLHandler = () => {
        if (machileLearningCat) {
            setMachileLearningCat(!machileLearningCat);
        } else {
            setBackendCat(false);
            setFrontendCat(false);
            setFullstackCat(false);
            setAllCat(false);
            setMachileLearningCat(!machileLearningCat);
        }
    };
    const FrontendHandler = () => {
        if (frontendCat) {
            setFrontendCat(!frontendCat);
        } else {
            setBackendCat(false);
            setMachileLearningCat(false);
            setFullstackCat(false);
            setAllCat(false);
            setFrontendCat(!frontendCat);
        }
    };
    const BackendHandler = () => {
        if (backendCat) {
            setBackendCat(!backendCat);
        } else {
            setFrontendCat(false);
            setMachileLearningCat(false);
            setFullstackCat(false);
            setAllCat(false);
            setBackendCat(!backendCat);
        }
    };
    const FullstackHandler = () => {
        if (fullstackCat) {
            setFullstackCat(!fullstackCat);
        } else {
            setBackendCat(false);
            setFrontendCat(false);
            setMachileLearningCat(false);
            setAllCat(false);
            setFullstackCat(!fullstackCat);
        }
    };
    const AllHandler = () => {
        if (allCat) {
            setAllCat(!allCat);
        } else {
            setBackendCat(false);
            setFrontendCat(false);
            setFullstackCat(false);
            setMachileLearningCat(false);
            setAllCat(!allCat);
        }
    };


    return (
        <section className="flex flex-col items-center justify-center gap-8 py-20">
            <div className='flex flex-col gap-2 md:gap-4 items-center'>
                <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl text-dark_blue'>My Skills</h2>
                <p className='text-dark_blue font-light text-xs md:text-base lg:text-xl'>My Technical Level</p>
            </div>

            <div className='category-skill'>
                <ul className="flex gap-4 text-wrap justify-center my-2 flex-wrap">
                    <CategoryComp onText="Machine Learning" offText="ML" condition={machileLearningCat} onClick={MLHandler}/>
                    <CategoryComp onText="Frontend" offText="FE" condition={frontendCat} onClick={FrontendHandler}/>
                    <CategoryComp onText="Backend" offText="BE" condition={backendCat} onClick={BackendHandler}/>
                    <CategoryComp onText="Fullstack" offText="FS" condition={fullstackCat} onClick={FullstackHandler}/>
                    <CategoryComp onText="ALL" offText="ALL" condition={allCat} onClick={AllHandler}/>
                </ul>
            </div>
            <div className='list-skill'>
                <SkillList />

            </div>
        </section>
    )
}

