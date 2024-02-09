import Image from "next/image";
import BGBackdrop from "./components/BGBackdrop";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default function Home() {
  
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <BGBackdrop />
    </>
  );
}