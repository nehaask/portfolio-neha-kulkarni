// components/ProjectCard.js
import React from "react";
import {
  Box,
  Text,
  Badge,
  Heading,
  HStack,
  Link,
  Flex,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      overflow="hidden"
      bg="white"
      shadow="md"
      borderRadius="md"
      _hover={{ transform: "scale(1.02)", shadow: "xl" }}
      transition="all 0.2s"
      width="100%"
      maxW={{ base: "360px", md: "full" }}
      
    >
      {/* GitHub icon in the top-right */}
      <Link href={project.link} isExternal position="absolute" bottom={5} right={5}>
        <Icon as={FaGithub} w={6} h={6} />
      </Link>

      <GridItem height="100%">
        <Box p={4}>
          <Heading size="md" mb={2} color="black">
            {project.title}
          </Heading>
          <Text mb={4} color="black">
            {project.description}
          </Text>
          <HStack spacing={2} mb={4} flexWrap="wrap">
            {project.tech.map((tech, idx) => (
              <Badge key={idx} color={"black"}>{tech}</Badge>
            ))}
          </HStack>
        </Box>
      </GridItem>
    </Flex>
  );
};

export default ProjectCard;
