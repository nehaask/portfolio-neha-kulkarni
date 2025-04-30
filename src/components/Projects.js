// Projects.js
import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Grid,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Octave – Discord Music Bot",
    description:
      "An open-source Discord bot written in Java and Kotlin using JDA and Lavaplayer, providing a premium music experience.",
    tech: ["Java", "Kotlin", "JDA", "Lavaplayer"],
    link: "https://github.com/nehaask/Octave",
    image: "logo512.png",
  },
  {
    title: "CG Rasterisation Engine",
    description:
      "Reconstructed the OpenGL API engine in Python and implemented the pipeline to render 2D and 3D models.",
    tech: ["Python", "OpenGL", "Computer Graphics"],
    link: "https://github.com/nehaask/CG-Rasterisation-Engine",
    image: "logo512.png",
  },
  {
    title: "Spotify Music Data Analysis",
    description:
      "Analyzed Spotify’s 12M-song dataset using SQL and NoSQL modeling, normalization, indexing, and the Apriori algorithm for pattern mining.",
    tech: ["Python", "SQL", "MongoDB", "Data Mining"],
    link: "https://github.com/nehaask",
    image: "logo512.png",
  },
  {
    title: "Autonomous Parking Using RL and GA",
    description:
      "Simulated an autonomous parking system using Reinforcement Learning and Genetic Algorithms for intelligent path planning.",
    tech: ["Python", "Reinforcement Learning", "Genetic Algorithms"],
    link: "https://github.com/nehaask",
    image: "logo512.png",
  },
];

export default function Projects() {
  return (
    <Flex height="100vh">
          {/* Sidebar */}
          <Flex direction="column" width="80px" bg="green">
            <Box flex="1" display="flex" justifyContent="center" alignItems="center">
              <Text
                transform="rotate(-90deg)"
                fontWeight="bold"
                letterSpacing="widest"
                textAlign="center"
                fontSize="2xl"
                color="white"
              >
                PROJECTS
              </Text>
            </Box>
          </Flex>

      {/* Main Content */}
      <Box flex="1" bg="green" py={10} px={{ base: 6, md: 20 }}>
        <Container maxW="container.xl" py={{ base: 10, md: 16 }} minH="100vh">
          <Flex justify={{ base: "flex-start", md: "center" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={6}
            width="100%"
            maxW="full"
            overflowY={{ base: "auto", md: "visible" }}
            maxH={{ base: "calc(100vh - 200px)", md: "none" }} // restrict height on mobile
          >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Grid>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
