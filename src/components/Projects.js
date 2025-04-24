import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
  Card,
  Badge,
  Image,
  HStack,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Flex height="100vh">
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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            
            <ProjectCard> </ProjectCard>
            
          </SimpleGrid>

        </Container>
      </Box>
    </Flex>
  );
}