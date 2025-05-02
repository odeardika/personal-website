import Header from "@/components/Header/Header";
import About from "@/components/Section/About/About";
import HomeSection from "@/components/Section/Home/Home";
import Project from "@/components/Section/Project/Project";
import Footer from "@/components/Footer/Footer";
import Skills from "@/components/Section/Skills/Skills";

export default function Home() {
  return (
    <main className="bg-zinc-100">
      <Header />
      <HomeSection />
      <About />

      <Skills />
      <Project />
      <Footer />

    </main>
  );
}
