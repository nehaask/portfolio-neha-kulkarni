import React from "react";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Text,
  Tag,
  IconButton,
  Flex,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const projects = [
  {
    name: "Connect Me",
    description:
      "A video calling web app that connects two peers using WebRTC to stream real-time audio and video",
    tags: [],
    github: "https://github.com/your-project-1",
  },
  {
    name: "Sound 54",
    description:
      "Music streaming web app to stream songs, upload songs, create albums & custom playlists",
    tags: ["Node.js", "Next.js", "GraphQL", "Rest API", "MongoDB"],
    github: "https://github.com/your-project-2",
  },
];

const ProjectSlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box bg="#0A0A23" py={10} px={5} color="white">
      <Heading textAlign="center" mb={10}>
        Projects I've Built
      </Heading>

      <Flex justify="center" align="center" mb={4}>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Previous"
          mr={2}
          bg="transparent"
          _hover={{ bg: "gray.700" }}
        />
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Next"
          bg="transparent"
          _hover={{ bg: "gray.700" }}
        />
      </Flex>

      <Slider ref={sliderRef} {...settings}>
        {projects.map((proj, i) => (
          <Box
            key={i}
            p={6}
            mx={3}
            border="1px solid #2A2A4B"
            borderRadius="lg"
            bg="#0F0F3B"
          >
            <VStack align="start" spacing={3} height="100%">
              <Text fontWeight="bold" fontSize="lg" color="#F28C6E">
                {proj.name}
              </Text>
              <Text>{proj.description}</Text>

              {proj.tags.length > 0 && (
                <HStack spacing={2} flexWrap="wrap">
                  {proj.tags.map((tag, idx) => (
                    <Tag key={idx} bg="#1E1E5A" color="white">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              )}

              <Box alignSelf="flex-end" mt="auto">
                <Link href={proj.github} isExternal>
                  <FaGithub size="1.5em" />
                </Link>
              </Box>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectSlider;
