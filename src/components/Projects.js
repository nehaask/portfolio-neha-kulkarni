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

export default function Projects() {
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
                    PROJECTS
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
                <Card.Root width="500px">
                  <Card.Body gap="2">
                    <Avatar.Root size="lg" shape="rounded">
                      <Avatar.Image src="https://picsum.photos/200/300" />
                      <Avatar.Fallback name="Nue Camp" />
                    </Avatar.Root>
                    <Card.Title mt="2">Nue Camp</Card.Title>
                    <Card.Description>
                      This is the card body. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                      Curabitur nec odio vel dui euismod fermentum.

                      <Stack direction="row">
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="solid">Solid</Badge>
                        <Badge variant="subtle">Subtle</Badge>
                        <Badge variant="surface">Surface</Badge>
                      </Stack>
                    </Card.Description>
                  </Card.Body>
                  <Card.Footer justifyContent="flex-end">
                    <Button variant="outline">View</Button>
                    <Button>Join</Button>
                  </Card.Footer>
                </Card.Root>
                
              </Flex>
            </Container>
                  </Box>
                </Flex>
          );
}