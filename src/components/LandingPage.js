import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Container,
  HStack,
  Icon,
  Link,
  Button
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaEllipsisH } from 'react-icons/fa'
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
             <Box
                  as="span"
                  display="inline-block"
                  h="1.2em"
                  w="2px"
                  bg="gray.600"
                  animation={blinkAnimation}
                  ml={2}
                />
            </Heading>
          </Flex>

          <HStack spacing={6}>
            <Link href="https://github.com/nehaask" isExternal>
              <Icon as={FaGithub} w={8} h={8} />
            </Link>
            <Link href="https://linkedin.com/in/kulkarni-neha" isExternal>
              <Icon as={FaLinkedin} w={8} h={8}  />
            </Link>
            <Link href="mailto:kulkarneha5@gmail.com">
              <Icon as={FaEnvelope} w={8} h={8}  />
            </Link>
            <Link href="mailto:kulkarneha5@gmail.com">
              <Icon as={FaEllipsisH} w={8} h={8}  />
            </Link>
          </HStack>
          <Button
          as="a"
          href="/resume.pdf"
          target="_blank"
          colorScheme="green"
          variant="subtle"
          size="md"
          borderRadius="md"
          fontWeight="medium"
        >
          resume
            </Button>
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
