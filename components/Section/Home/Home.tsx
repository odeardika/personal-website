'use client'
import React from 'react';
import Image from 'next/image';
import profile from "@public/assets/images/profile_img.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';



export default function Home() {
    //     const typeequence={[
    //     // Same substring at the start will only be typed once, initially
    //     'We produce food for Mice',
    //     1000,
    //     'We produce food for Hamsters',
    //     1000,
    //     'We produce food for Guinea Pigs',
    //     1000,
    //     'We produce food for Chinchillas',
    //     1000,
    //   ]};

    return (
        <section
            data-aos="fade-up"
            className="flex flex-col-reverse px-10 lg:px-48 xl:px-48 xl:flex-row xl:h-screen items-center gap-4 xl:gap-0 lg:flex-row lg:h-screen py-4">

            <div className="basis-7/12 flex flex-col gap-6 ">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl xl:text-5xl text-dark_blue font-extrabold xl:font-semibold">Hi, I’m Ode <span className='wave'>👋</span></h1>
                    <div>
                        <p className="text-4xl font-thin text-dark_blue">A passionate software developer who loves</p>
                        <div className='text-4xl text-sky-400 font-black'>
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
                                className=''
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <p className="text-xl font-thin text-slate-400">I design, build, and maintain applications that are scalable, efficient, and user-friendly.</p>
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
                <div className="">
                    <Image className="border-2 border-gray_blue rounded-full object-cover h-72 w-52 lg:h-96 lg:w-72 xl:h-96 xl:w-72 blob-3 bg-white " src={profile} alt="profile" width={700} height={700} />
                </div>
            </div>

        </section>
    )
}
