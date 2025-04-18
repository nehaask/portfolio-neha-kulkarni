import React from "react"
import {
  Box,
  Heading,
  Text,
  HStack,
  Tag,
  Button,
  Link,
  Image,
  VStack,
    Card,
    Avatar,
    Badge,
    Flex,
    
} from "@chakra-ui/react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function ProjectCard() {
    return (
     <Card.Root
            flexDirection="row"
            overflow="hidden"
            maxW="xl"
        >
            <Image
            objectFit="cover"
            maxW="200px"
            src="logo512.png"
            alt="Spotify Data Project"
            />
            <Box>
            <Card.Body>
                <Card.Title mb="2">
                Spotify Music Data Modeling & Mining
                </Card.Title>
                <Card.Description>
                Designed an efficient ER model and schema for a 12M-record Spotify dataset. Benchmarked MongoDB vs SQL (60% gain in relational DBs). Applied itemset mining to boost query speed by 40% and system efficiency by 20%.
                </Card.Description>
                <HStack mt="4">
                <Badge>SQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Data Mining</Badge>
                </HStack>
            </Card.Body>
            <Card.Footer>
            <Link href="https://github.com/..." isExternal>
                <Button colorScheme="white" variant="outline">GitHub</Button>
            </Link>
            </Card.Footer>
            </Box>
        </Card.Root>
  )
}
