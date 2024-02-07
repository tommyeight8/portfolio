import Image from "next/image";
import BGBackdrop from "./components/BGBackdrop";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Header2 from "./components/Header2";
import ShootingStars from "./components/ShootingStars";

export default function Home() {
  
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <BGBackdrop />
    </>
  );
}
