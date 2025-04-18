import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { customConfig } from "./theme/config";
import Navbar from "./components/Navbar";
import HeroSection from "./components/LandingPage";
import MyTimeline from "./components/MyTimeline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import About from "./components/About";
 
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
