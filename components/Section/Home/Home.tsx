'use client'
import React from 'react';
import Image from 'next/image';
import profile from "@public/assets/images/profile_img.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';



export default function Home() {
    const blobShapes = [
        '25% 75% 70% 30% / 40% 60% 40% 60%', // blob-1
        '55% 45% 55% 45% / 60% 40% 60% 40%', // blob-2
        '45% 55% 35% 65% / 60% 35% 65% 40%',  // blob-3
        '40% 60% 60% 40% / 70% 40% 60% 30%',  // blob-4
        '30% 70% 60% 40% / 50% 40% 60% 50%',  // blob-5
        '60% 40% 30% 70% / 50% 60% 40% 50%',  // blob-6
    ];

    const [blobRadius, setBlobRadius] = useState(blobShapes[0]);

    const blobShapes2 = [
        '59% 41% 40% 60% / 80% 59% 41% 20%', // blob-1
        '27% 73% 40% 60% / 34% 22% 78% 66%', // blob-2
        '60% 40% 30% 70% / 50% 60% 40% 50%', // blob-3

    ];

    const [blobRadius2, setBlobRadius2] = useState(blobShapes2[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlobRadius(prev => {
                const currentIndex = blobShapes.indexOf(prev);
                return blobShapes[(currentIndex + 1) % blobShapes.length];
            })
            
            
        }, 2000);
        const interval2 = setInterval(() => {
            setBlobRadius2(prev => {
                const currentIndex = blobShapes2.indexOf(prev);
                return blobShapes2[(currentIndex + 1) % blobShapes2.length];
            })
        }, 1000)
            
        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        };

    }, [])
    return (
        <section
            data-aos="fade-up"
            className="flex flex-col-reverse px-10 md:flex-row md:px-24 xl:px-48 items-center gap-4 lg:gap-0 md:h-screen py-4">

            <div className="basis-7/12 flex flex-col gap-6 ">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-3xl lg:text-5xl text-dark_blue mid-extra-w md:extra-w font-extrabold lg:font-semibold">Hi, I’m Ode <span className='wave'>👋</span></h1>
                    <div>
                        <p className="text-3xl md:text-3xl lg:text-4xl font-thin text-dark_blue">A passionate software developer who loves</p>
                        <div className='text-3xl md:text-3xl lg:text-5xl text-sky-400 font-black less-extra-w'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'building website',
                                    1000,
                                    'building applications',
                                    1000,
                                    'building software',
                                    1000,
                                    'building tools',
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <p className="text-base md:text-base lg:text-xl font-thin text-slate-400">I design, build, and maintain applications that are scalable, efficient, and user-friendly.</p>
                </div>
                <div>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8, }}
                        className="bg-dark_blue text-white py-4 px-6 text-base font-semibold rounded-2xl">
                        Say Hello
                    </motion.button>
                </div>
            </div>

            <div className="flex justify-end grow">
                    <div
                        style={{
                            borderRadius: blobRadius2,
                        }}
                        className="border-2 border-gray_blue blob">
                        <Image
                            style={{
                                borderRadius: blobRadius,
                            }}
                            className="border-2 border-gray_blue object-cover h-72 w-52 lg:h-96 lg:w-72 xl:h-96 xl:w-72 bg-white" src={profile} alt="profile" width={700} height={700} />
                    </div>
                
            </div>

        </section>
    )
}
