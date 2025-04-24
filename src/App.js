import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { customConfig } from "./theme/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/LandingPage";
import MyTimeline from "./components/MyTimeline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import About from "./components/About";
// import ProjectSlider from "./components/ProjectSlider";
 
const system = createSystem(defaultConfig, customConfig);

export default function App() {
  return (
    <ChakraProvider value={system}>
      <Navbar />
      <HeroSection />
      <MyTimeline />
      <Skills/>
      <Projects />
      <Blogs/>
      <About/>
    </ChakraProvider>
  );
}
