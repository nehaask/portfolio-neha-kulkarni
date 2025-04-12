import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare} from "react-icons/fa";
import { keyframes } from "@emotion/react";

export default function HeroSection() {
  // Define the blink keyframes animation
  const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  `;
  const blinkAnimation = `${blink} 1.2s step-end infinite`;
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }} minH="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        p={{ base: 10, md: 16 }}
      >
        {/* Left side: text content */}
        <Box flex="1" mr={{ md: 6 }} p={{ base: 3, md: 8 }}>
          <Heading
            as="h1"
            fontSize={{ base: "3rem", md: "6rem" }}
            whiteSpace="nowrap"
            mb={4}
            color="danger"
            py={{ base: 2, md: 4 }}
          >
            Neha Kulkarni
          </Heading>

          {/* Title with blinking cursor */}
          <Flex alignItems="center" mb={4}>
            <Heading
              as="h2"
              fontSize={{ base: "0.5rem", md: "1.5rem" }}
              fontWeight="normal"
              color="gray.600"
              mr={1}
            >
              Software Engineer
            </Heading>
            <Box
              as="span"
              display="inline-block"
              h="1.5em"
              w="2px"
              bg="gray.600"
              animation={blinkAnimation}
            />
          </Flex>

          <Text mb={4}>
            I am currently a university student at Rochester Institute of
            Technology, working towards a Degree in Computer Science. I love
            building applications.
          </Text>

          {/* Social buttons */}
          <Stack direction="row" spacing={4}>
            <Button
              as="a"
              href="#"
              leftIcon={<FaLinkedin />}
              colorScheme="linkedin"
              variant="solid"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.03)" }}
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="#"
              leftIcon={<FaGithubSquare />}
              colorScheme="github"
              variant="solid"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.03)" }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>

        {/* Right side: illustration */}
        <Box
          flex="1"
          mt={{ base: 8, md: 0 }}
          textAlign="center"
          p={{ base: 3, md: 8 }}
        >
          <Image
            src="avatar.jpg"
            alt="Illustration"
            maxW="400px"
            mx="auto"
            borderRadius="full"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.03)" }}
          />
        </Box>
      </Flex>
    </Container>
  );
}
