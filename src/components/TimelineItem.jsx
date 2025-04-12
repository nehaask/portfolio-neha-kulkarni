// ExperienceCard.tsx
import {
    Box,
    Flex,
    Heading,
    Text,
    Tag,
    Wrap,
    WrapItem,
    Link,
    VStack,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  
  const tags = [
    'JavaScript',
    'TypeScript',
    'HTML & SCSS',
    'React',
    'Next.js',
    'React Native',
    'WordPress',
    'Contentful',
    'Node.js',
    'PHP',
  ]
  
  export default function ExperienceCard() {
    return (
      <Box
        bgGradient="linear(to-br, #0B1120, #111827)"
        p={6}
        rounded="xl"
        boxShadow="xl"
        border="1px solid"
        borderColor="whiteAlpha.100"
        maxW="container.md"
      >
        <Flex justify="space-between" mb={4}>
          <Text fontWeight="medium" color="whiteAlpha.600">
            2018 — 2024
          </Text>
          <Link
            href="https://upstatement.com"
            isExternal
            color="teal.300"
            fontWeight="semibold"
          >
            Lead Engineer · Upstatement <ExternalLinkIcon mx="1" />
          </Link>
        </Flex>
  
        <VStack align="start" spacing={1} mb={4}>
          <Text color="gray.400" fontSize="md" fontWeight="medium">
            Senior Engineer
          </Text>
          <Text color="gray.500" fontSize="md">
            Engineer
          </Text>
        </VStack>
  
        <Text color="gray.400" fontSize="sm" mb={6}>
          Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.
        </Text>
  
        <Wrap spacing={3}>
          {tags.map((tag) => (
            <WrapItem key={tag}>
              <Tag
                size="md"
                px={4}
                py={1}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="teal.200"
                fontWeight="medium"
              >
                {tag}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    )
  }
  