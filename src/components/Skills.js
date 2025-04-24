import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Container,
  Card,
  Avatar,
  Badge,
  Heading,
  VStack,
  Image,
} from "@chakra-ui/react";

const skills = [
  {
    title: "Web Dev",
    image: "/images/web-dev.png", 
    items: ["HTML/CSS/JavaScript", "Node.js / NPM", "React.js"],
  },
  {
    title: "Mobile Dev",
    image: "/images/mobile-dev.png",
    items: ["Swift", "Xcode", "Storyboards", "SwiftUI", "ARKit", "CoreML"],
  },
  {
    title: "Electronics",
    image: "/images/electronics.png",
    items: ["Electronic Circuits", "RF Circuits", "Troubleshooting", "IPC Standard Soldering"],
  },
];

export default function Skills() {
    return (
      <Flex height="100vh">
              {/* Sidebar */}
              <Flex direction="column" width="80px">
                <Box
                  flex="1"
                  bg="white"
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
                    color="green"
                  >
                    SKILLS
                  </Text>
                </Box>
              </Flex>


          {/* Main Content */}
          <Box flex="1" bg="white" py={10} px={{ base: 6, md: 20 }}>
         <Container maxW="container.xl" py={{ base: 10, md: 16 }} minH="100vh">
              <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
                p={{ base: 10, md: 16 }}
              >

                <Box
                  bgGradient="linear(to-b, #C5F1FF, #EDEAFF)"
                  borderRadius="2xl"
                  p={10}
                  maxW="7xl"
                  mx="auto"
                  mt={10}
                >
                  <Heading textAlign="center" size="2xl" mb={12}>
                    Skills and Qualifications
                  </Heading>
                  <Flex
                    justify="space-around"
                    direction={["column", "column", "row"]}
                    gap={10}
                    wrap="wrap"
                  >
                    {skills.map((skill) => (
                      <VStack
                        key={skill.title}
                        align="center"
                        spacing={4}
                        p={10}
                        borderRadius="xl"
                        bg="green"
                        shadow="md"
                      >
                        <Image
                          boxSize="100px"
                          src={skill.image}
                          alt={`${skill.title} Icon`}
                          objectFit="contain"
                        />
                        <Heading size="md">{skill.title}</Heading>
                        <VStack spacing={1} align="start">
                          {skill.items.map((item) => (
                            <Text key={item} fontSize="sm" color="white">
                              • {item}
                            </Text>
                          ))}
                        </VStack>
                      </VStack>
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Container>
                  </Box>
                </Flex>
          );
}