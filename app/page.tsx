import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />

    </main>
  );
}