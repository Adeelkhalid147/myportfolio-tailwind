import Head from "next/head";
import About from "./component/About";
import Main from "./component/Main";
import NavBar from "./component/NavBar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";


export default function Home() {
  return (
    <div>
      <NavBar />

        <Main />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        
      
       
    </div>
  );
}
