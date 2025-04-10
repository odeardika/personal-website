import React from 'react'
import Image from 'next/image'
import profile from "@public/assets/images/profile_img.png";

export default function Home() {
    return (
        <section className="flex flex-col-reverse px-10 lg:px-48 xl:px-48 xl:flex-row xl:h-screen items-center gap-4 xl:gap-0 lg:flex-row lg:h-screen py-4">
            <div className="basis-1/2 flex flex-col gap-10 ">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl xl:text-5xl text-dark_blue font-extrabold xl:font-semibold">Ode Ardika 🖐️</h1>
                    <p className="text-xl font-extralight text-slate-500 text-justify">An undergraduate Informatics Student who interested on Website and Software Developer.  I am committed to continuous learning and growth, with a strong work ethic and a collaborative approach to delivering high-quality solutions.
                    </p>
                </div>
                <div>
                    <button className="bg-dark_blue text-white py-4 px-6 text-base font-semibold rounded-xl">Say Hello</button>
                </div>
            </div>
            <div className="flex justify-end grow">
                <div className="">
                    <Image className="border-2 border-gray_blue rounded-full object-cover h-72 w-52 lg:h-96 lg:w-72 xl:h-96 xl:w-72 blob-3 " src={profile} alt="profile" width={700} height={700} />
                </div>
            </div>
        </section>
    )
}
