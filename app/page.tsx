import Header from "@/components/Header/Header";
import About from "@/components/Section/About/About";
import HomeSection from "@/components/Section/Home/Home";
import Project from "@/components/Section/Project/Project";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <HomeSection />
      <About />

      <Project />
    </main>
  );
}
