import Image from "next/image";
import profile from "../public/assets/images/profile_img.png";

export default function Home() {
  return (
    <div className="">
      <main>
        <header className="flex px-48 py-8">
          <div className="flex basis-1/2">
            <h3 className="text-2xl font-semibold">odeardika.</h3>
          </div>
          <nav className="flex basis-1/2 grow">
            <ul className="flex grow justify-end gap-8 text-base">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </nav>

        </header>

        <div className="bg-background flex px-48 h-screen items-center">
          <div className="basis-1/2 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl text-dark_blue font-semibold">Ode Ardika 🖐️</h1>
              <p className="text-xl font-extralight text-slate-500">An undergraduate Informatics Student who interested on Design Graphic and Photography. I’m looking forward for new experience in design interface, user experience, and Front-End Web developement.
              </p>
            </div>
            <div>
              <button className="bg-dark_blue text-white py-4 px-6 text-base font-semibold rounded-xl">Say Hello</button>
            </div>
          </div>
          <div className="flex justify-end grow">
            <div className="">
              <Image className="border-2 border-gray_blue rounded-full object-cover h-96 w-72 blob-3" src={profile} alt="profile" width={700} height={700} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
