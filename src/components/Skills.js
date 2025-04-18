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
} from "@chakra-ui/react";

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
                test goes here
              </Flex>
            </Container>
                  </Box>
                </Flex>
          );
}