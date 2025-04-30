import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
  Badge,
  HStack,
  SimpleGrid,
  Link,
  Heading,
  
} from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";
import { Grid, GridItem } from "@chakra-ui/react";

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
    <Flex minHeight="100vh" flexDirection={{ base: "column", md: "row" }}>
      {/* Sidebar */}
      <Flex direction="column" width="80px">
        <Box
          flex="1"
          bg="green"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
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
              maxW={{ base: "360px", md: "full" }} // constrains width on mobile
            >
              {projects.map((project, index) => (
                <Flex
                key={index}
                flexDirection="column"
                overflow="hidden"
                bg="white"
                shadow="md"
                borderRadius="md"
                _hover={{ transform: "scale(1.02)", shadow: "xl" }}
                transition="all 0.2s"
                width="100%" // ensure full width of grid item
                maxW={{ base: "360px", md: "full" }} // constrains width on mobile
                >
                  <GridItem key={index} height="100%">
                  <Box p={4} spacingX={8} spacingY={6}>
                    <Heading size="md" mb={2} color="black">
                      {project.title}
                    </Heading>
                    <Text mb={4} color="black">
                      {project.description}
                    </Text>
                    <HStack spacing={2} mb={4} flexWrap="wrap">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx}>{tech}</Badge>
                      ))}
                    </HStack>
                    <Link href={project.link} isExternal>
                      <Button
                        colorScheme="purple"
                        variant="outline"
                        leftIcon={<FaGithub />}
                      >
                        View on GitHub
                      </Button>
                    </Link>
                  </Box>
                  </GridItem>
                </Flex>
              ))}
            </Grid>
          </Flex> 

        </Container>
      </Box>
    </Flex>
  );
}