import React from "react";
import {
  Box,
  Flex,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaBrain, FaChalkboardTeacher, FaChartLine, FaBlog, FaArrowCircleRight} from "react-icons/fa";

const newsItems = [
  {
    date: "Oct 27, 2023",
    icon: FaBlog,
    title: "Easily create your own simple yet highly customizable blog",
    description:
      "Take full control of your personal brand and privacy by migrating away from the big tech platforms!",
    link: "#",
  },
  {
    date: "Oct 26, 2023",
    icon: FaBrain,
    title: "Sharpen your thinking with a second brain",
    description:
      "Create a personal knowledge base and share your knowledge with your peers.",
    link: "#",
  },
  {
    date: "Oct 25, 2023",
    icon: FaChartLine,
    title: "Communicate your results effectively with the best data visualizations",
    description: "Use popular tools such as Plotly, Mermaid, and data frames.",
    link: "#",
  },
  
];

export default function Blogs() {
  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <Flex direction="column" width="80px" bg="white">
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Text
            transform="rotate(-90deg)"
            fontWeight="bold"
            letterSpacing="widest"
            textAlign="center"
            fontSize="2xl"
            color="green"
          >
            BLOGS
          </Text>
        </Box>
      </Flex>

      {/* Main Content */}
      <Box flex="1" bg="white" p={8} overflowY="auto">
        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            {newsItems.map((item, idx) => (
              <Box
              key={idx}
              bg="green"
              p={6}
              borderWidth="1px"
              borderColor="gray.700"
              borderRadius="xl"
              _hover={{ borderColor: "green.400", transform: "translateY(-4px)", transition: "0.3s" }}
            >
              <Flex direction={{ base: "column", md: "row" }} align="start">
                <Text color="black" minW="90px" fontSize="sm" mb={{ base: 2, md: 0 }}>
                  {item.date}
                </Text>
            
                <VStack align="start" spacing={2} ml={{ base: 0, md: 10 }}>
                  <HStack spacing={2}>
                    <Icon as={item.icon} boxSize={6} />
                    <Heading as="h3" size="md" color="black">
                      {item.title}
                    </Heading>
                  </HStack>
                  <Text color="black">{item.description}</Text>
                  <Link href={item.link} color="green.400" fontWeight="bold" fontSize="sm">
                    Read more <Icon as={FaArrowCircleRight} ml={1} />
                  </Link>
                </VStack>
              </Flex>
            </Box>
            
            ))}
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
