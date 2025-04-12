import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Stack, 
  Flex, 
  Badge, 
  SimpleGrid, 
  Avatar, 
  Card, 
  CardBody, 
  CardHeader, 
  CardFooter,
  Button,
  HStack,
  VStack,
  Divider,
  Tag,
  Link,
  useColorModeValue,
  IconButton
} from '@/components/ui/alert';
import { Sun, Moon, Github, Linkedin, Twitter, ExternalLink, Mail } from 'lucide-react';

export default function Portfolio() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("blue.500", "blue.300");
  
  return (
    <Box>
      {/* Header / Navigation */}
      <Flex 
        as="nav" 
        bg={useColorModeValue("white", "gray.800")}
        color={textColor}
        px={4} 
        py={3} 
        justifyContent="space-between" 
        alignItems="center"
        position="sticky"
        top={0}
        zIndex={10}
        boxShadow="sm"
      >
        <Heading size="md">My Portfolio</Heading>
        
        <HStack spacing={6}>
          <Link href="#experience">Experience</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#recent">Recent</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
        </HStack>
        
        <HStack spacing={3}>
          <IconButton
            aria-label="GitHub"
            variant="ghost"
            icon={<Github size={20} />}
          />
          <IconButton
            aria-label="LinkedIn"
            variant="ghost"
            icon={<Linkedin size={20} />}
          />
          <IconButton
            aria-label="Switch color mode"
            variant="ghost"
            icon={<Sun size={20} />}
          />
        </HStack>
      </Flex>
      
      {/* Hero Section */}
      <Box 
        bg={accentColor} 
        color="white" 
        py={20} 
        textAlign="center"
      >
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Avatar 
              size="2xl" 
              src="/api/placeholder/200/200"
              border="4px solid"
              borderColor="white"
            />
            <Heading size="2xl">John Doe</Heading>
            <Text fontSize="xl">Frontend Developer & UI/UX Designer</Text>
            <HStack spacing={4} pt={4}>
              <Button 
                rightIcon={<Mail size={16} />}
                bg="white" 
                color="blue.500"
                _hover={{ bg: "gray.100" }}
              >
                Contact Me
              </Button>
              <Button 
                rightIcon={<ExternalLink size={16} />}
                variant="outline" 
                borderColor="white"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                Download Resume
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Work Experience Section */}
      <Box py={16} id="experience">
        <Container maxW="container.lg">
          <Heading mb={8}>Work Experience</Heading>
          
          <VStack spacing={6} align="stretch">
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <VStack align="start" spacing={4}>
                  <HStack justify="space-between" w="full">
                    <Heading size="md">Senior Frontend Developer</Heading>
                    <Badge colorScheme="blue">2022 - Present</Badge>
                  </HStack>
                  <Text fontWeight="bold" color={accentColor}>TechCorp Inc.</Text>
                  <Text>
                    Led a team of five developers in building responsive web applications. 
                    Improved application performance by 40% and implemented modern React patterns.
                    Collaborated with design team to ensure pixel-perfect UI implementation.
                  </Text>
                  <HStack>
                    <Tag>React</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>Chakra UI</Tag>
                    <Tag>Redux</Tag>
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
            
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <VStack align="start" spacing={4}>
                  <HStack justify="space-between" w="full">
                    <Heading size="md">Frontend Developer</Heading>
                    <Badge colorScheme="purple">2019 - 2022</Badge>
                  </HStack>
                  <Text fontWeight="bold" color={accentColor}>WebSolutions LLC</Text>
                  <Text>
                    Developed interactive web applications for various clients.
                    Implemented responsive designs and ensured cross-browser compatibility.
                    Worked closely with UX designers to translate wireframes into functional interfaces.
                  </Text>
                  <HStack>
                    <Tag>JavaScript</Tag>
                    <Tag>React</Tag>
                    <Tag>CSS</Tag>
                    <Tag>HTML5</Tag>
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box py={16} bg={bgColor} id="skills">
        <Container maxW="container.lg">
          <Heading mb={8}>Skills & Certifications</Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>Technical Skills</Heading>
              <SimpleGrid columns={2} spacing={4}>
                <VStack align="start">
                  <Text fontWeight="bold">Frontend</Text>
                  <HStack flexWrap="wrap">
                    <Tag>React</Tag>
                    <Tag>Next.js</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>JavaScript</Tag>
                  </HStack>
                </VStack>
                
                <VStack align="start">
                  <Text fontWeight="bold">UI Libraries</Text>
                  <HStack flexWrap="wrap">
                    <Tag>Chakra UI</Tag>
                    <Tag>Tailwind CSS</Tag>
                    <Tag>Material UI</Tag>
                  </HStack>
                </VStack>
                
                <VStack align="start">
                  <Text fontWeight="bold">Backend</Text>
                  <HStack flexWrap="wrap">
                    <Tag>Node.js</Tag>
                    <Tag>Express</Tag>
                    <Tag>MongoDB</Tag>
                  </HStack>
                </VStack>
                
                <VStack align="start">
                  <Text fontWeight="bold">Tools</Text>
                  <HStack flexWrap="wrap">
                    <Tag>Git</Tag>
                    <Tag>Figma</Tag>
                    <Tag>VS Code</Tag>
                  </HStack>
                </VStack>
              </SimpleGrid>
            </Box>
            
            <Box>
              <Heading size="md" mb={4}>Certifications</Heading>
              <VStack align="start" spacing={4}>
                <Card bg={cardBg} w="full">
                  <CardBody>
                    <HStack justify="space-between">
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold">AWS Certified Developer</Text>
                        <Text fontSize="sm" color="gray.500">Amazon Web Services</Text>
                      </VStack>
                      <Badge>2023</Badge>
                    </HStack>
                  </CardBody>
                </Card>
                
                <Card bg={cardBg} w="full">
                  <CardBody>
                    <HStack justify="space-between">
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold">Professional React Developer</Text>
                        <Text fontSize="sm" color="gray.500">Meta</Text>
                      </VStack>
                      <Badge>2022</Badge>
                    </HStack>
                  </CardBody>
                </Card>
                
                <Card bg={cardBg} w="full">
                  <CardBody>
                    <HStack justify="space-between">
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold">UI/UX Design Fundamentals</Text>
                        <Text fontSize="sm" color="gray.500">Google</Text>
                      </VStack>
                      <Badge>2021</Badge>
                    </HStack>
                  </CardBody>
                </Card>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* What I've Been Up To Recently */}
      <Box py={16} id="recent">
        <Container maxW="container.lg">
          <Heading mb={8}>What I've Been Up To Recently</Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <VStack align="start" spacing={4}>
                  <Badge colorScheme="green">Learning</Badge>
                  <Heading size="md">Exploring Web3 Development</Heading>
                  <Text>
                    Diving into blockchain technology and smart contracts to build decentralized applications.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <VStack align="start" spacing={4}>
                  <Badge colorScheme="purple">Speaking</Badge>
                  <Heading size="md">Conference Talk on React Performance</Heading>
                  <Text>
                    Presented optimization techniques at the ReactConf 2024.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card bg={cardBg} boxShadow="md">
              <CardBody>
                <VStack align="start" spacing={4}>
                  <Badge colorScheme="blue">Contributing</Badge>
                  <Heading size="md">Open Source Development</Heading>
                  <Text>
                    Actively contributing to popular React libraries and tools.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Me */}
      <Box py={16} bg={bgColor} id="about">
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading mb={6}>About Me</Heading>
              <VStack align="start" spacing={4}>
                <Text>
                  I'm a passionate frontend developer with over 5 years of experience creating 
                  intuitive and performant web applications.
                </Text>
                <Text>
                  My journey in web development began when I built my first website during college, 
                  and I've been hooked ever since. I love the blend of creative design and 
                  technical problem-solving that frontend development offers.
                </Text>
                <Text>
                  When I'm not coding, you can find me hiking in the mountains, experimenting 
                  with photography, or reading science fiction novels.
                </Text>
                <HStack spacing={4} pt={2}>
                  <Button leftIcon={<Github size={16} />} variant="outline">
                    GitHub
                  </Button>
                  <Button leftIcon={<Linkedin size={16} />} variant="outline">
                    LinkedIn
                  </Button>
                  <Button leftIcon={<Twitter size={16} />} variant="outline">
                    Twitter
                  </Button>
                </HStack>
              </VStack>
            </Box>
            <Box>
              <Flex justifyContent="center" alignItems="center" h="full">
                <Box 
                  boxSize="sm" 
                  borderRadius="full" 
                  overflow="hidden" 
                  boxShadow="lg"
                >
                  <img src="/api/placeholder/400/400" alt="Profile" />
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Projects */}
      <Box py={16} id="projects">
        <Container maxW="container.lg">
          <Heading mb={8}>Projects</Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            <Card bg={cardBg} boxShadow="md" overflow="hidden">
              <Box h="200px" bg="gray.300">
                <img src="/api/placeholder/400/200" alt="Project 1" width="100%" height="100%" style={{ objectFit: 'cover' }} />
              </Box>
              <CardBody>
                <VStack align="start" spacing={3}>
                  <Heading size="md">E-commerce Dashboard</Heading>
                  <Text>
                    A comprehensive dashboard for online retailers with analytics, 
                    inventory management, and order processing.
                  </Text>
                  <HStack>
                    <Tag>React</Tag>
                    <Tag>Chakra UI</Tag>
                    <Tag>Redux</Tag>
                  </HStack>
                </VStack>
              </CardBody>
              <CardFooter>
                <HStack spacing={4}>
                  <Button leftIcon={<Github size={16} />} size="sm">
                    Code
                  </Button>
                  <Button leftIcon={<ExternalLink size={16} />} size="sm">
                    Demo
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
            
            <Card bg={cardBg} boxShadow="md" overflow="hidden">
              <Box h="200px" bg="gray.300">
                <img src="/api/placeholder/400/200" alt="Project 2" width="100%" height="100%" style={{ objectFit: 'cover' }} />
              </Box>
              <CardBody>
                <VStack align="start" spacing={3}>
                  <Heading size="md">Health Tracker App</Heading>
                  <Text>
                    A mobile-first application for tracking fitness goals, nutrition,
                    and personal wellness metrics.
                  </Text>
                  <HStack>
                    <Tag>Next.js</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>GraphQL</Tag>
                  </HStack>
                </VStack>
              </CardBody>
              <CardFooter>
                <HStack spacing={4}>
                  <Button leftIcon={<Github size={16} />} size="sm">
                    Code
                  </Button>
                  <Button leftIcon={<ExternalLink size={16} />} size="sm">
                    Demo
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
            
            <Card bg={cardBg} boxShadow="md" overflow="hidden">
              <Box h="200px" bg="gray.300">
                <img src="/api/placeholder/400/200" alt="Project 3" width="100%" height="100%" style={{ objectFit: 'cover' }} />
              </Box>
              <CardBody>
                <VStack align="start" spacing={3}>
                  <Heading size="md">Virtual Classroom</Heading>
                  <Text>
                    An interactive learning platform with real-time collaboration,
                    video lessons, and progress tracking.
                  </Text>
                  <HStack>
                    <Tag>React</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>Socket.io</Tag>
                  </HStack>
                </VStack>
              </CardBody>
              <CardFooter>
                <HStack spacing={4}>
                  <Button leftIcon={<Github size={16} />} size="sm">
                    Code
                  </Button>
                  <Button leftIcon={<ExternalLink size={16} />} size="sm">
                    Demo
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          </SimpleGrid>
          
          <Flex justify="center" mt={8}>
            <Button 
              size="lg" 
              rightIcon={<ExternalLink size={16} />}
              colorScheme="blue"
            >
              View All Projects
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
            <VStack align="start">
              <Heading size="md" mb={4}>My Portfolio</Heading>
              <Text fontSize="sm">
                Frontend Developer & UI/UX Designer based in San Francisco, California
              </Text>
            </VStack>
            
            <VStack align="start">
              <Heading size="sm" mb={4}>Navigation</Heading>
              <Link href="#experience">Experience</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#recent">Recent Updates</Link>
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
            </VStack>
            
            <VStack align="start">
              <Heading size="sm" mb={4}>Connect</Heading>
              <HStack>
                <Github size={16} />
                <Link href="#">GitHub</Link>
              </HStack>
              <HStack>
                <Linkedin size={16} />
                <Link href="#">LinkedIn</Link>
              </HStack>
              <HStack>
                <Twitter size={16} />
                <Link href="#">Twitter</Link>
              </HStack>
              <HStack>
                <Mail size={16} />
                <Link href="#">Email</Link>
              </HStack>
            </VStack>
            
            <VStack align="start">
              <Heading size="sm" mb={4}>Subscribe</Heading>
              <Text fontSize="sm" mb={2}>
                Stay updated with my latest projects and articles
              </Text>
              <HStack>
                <Button colorScheme="blue" size="sm">
                  Subscribe
                </Button>
              </HStack>
            </VStack>
          </SimpleGrid>
          
          <Divider my={6} />
          
          <Text textAlign="center" fontSize="sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}