import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { customConfig } from "./theme/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import About from "./components/About";
// import Brain from "./components/Brain";

const system = createSystem(defaultConfig, customConfig);

export default function App() {
  return (
    <ChakraProvider value={system}>
      <Navbar />
      <LandingPage />
      <Experience />
      <Skills/>
      {/* <Brain /> */}
      <Projects />
      <Blogs/>
      <About/>
    </ChakraProvider>
  );
}
