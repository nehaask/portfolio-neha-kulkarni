import {
  Box,
  Text,
  SimpleGrid,
  VStack,
  Heading,
  Image,
  useColorModeValue,
  Stack,
  Flex,
  Container,
  HStack,
  Icon,
  
} from "@chakra-ui/react";

const tools = {
  Frontend: [
    { name: "React", icon: "/icons/react.png" },
    { name: "TailwindCSS", icon: "/icons/tailwind.png" },
    { name: "Next.js", icon: "/icons/nextjs.png" },
  ],
  Backend: [
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "Java Spring Boot", icon: "/icons/springboot.png" },
    { name: "GraphQL", icon: "/icons/graphql.png" },
    { name: "ExpressJS", icon: "/icons/express.png" },
    { name: "Golang", icon: "/icons/golang.png" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "/icons/postgres.png" },
    { name: "MongoDB", icon: "/icons/mongodb.png" },
    { name: "Redis", icon: "/icons/redis.png" },
    { name: "AWS S3", icon: "/icons/aws-s3.png" },
  ],
  DevOps: [
    { name: "Docker", icon: "/icons/docker.png" },
    { name: "Git", icon: "/icons/git.png" },
  ],
  Design: [
    { name: "Figma", icon: "/icons/figma.png" },
  ],
};

function ToolGroup({ title, items }) {
  return (
    <Box
      border="1px solid"
      borderColor="black"
      borderRadius="md"
      p={5}
      w="full"
    >
      <SimpleGrid columns={[2, 3, 5]} spacing={4} justifyItems="center" mb={4}>
        {items.map((tool) => (
          <VStack key={tool.name} spacing={2}>
            <Image boxSize="40px" src={tool.icon} alt={tool.name} />
            <Text fontSize="sm">{tool.name}</Text>
          </VStack>
        ))}
      </SimpleGrid>
      <Text fontSize="md" textAlign="center" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
}

export default function Skills() {
  return (
    <Flex minH="100vh">
      {/* Sidebar */}
      <Flex direction="column" width="80px" bg="white">
        <Flex flex="1" align="center" justify="center">
          <Text
            transform="rotate(-90deg)"
            fontWeight="bold"
            letterSpacing="widest"
            textAlign="center"
            fontSize="2xl"
            color="green.400"
          >
            SKILLS
          </Text>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Box
        flex="1"
        bg="white"
        color="black"
        py={16}
        px={{ base: 4, md: 10, lg: 16 }}
      >
        <Heading mb={10} fontFamily="monospace">
          Tools in My Kit
        </Heading>

        <Stack spacing={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <ToolGroup title="Frontend" items={tools.Frontend} />
            <ToolGroup title="Backend" items={tools.Backend} />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <ToolGroup title="Databases" items={tools.Databases} />
            <ToolGroup title="DevOps" items={tools.DevOps} />
            <ToolGroup title="Design" items={tools.Design} />
          </SimpleGrid>
        </Stack>
      </Box>
    </Flex>
  );
}
