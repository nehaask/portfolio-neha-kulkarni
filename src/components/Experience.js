import React from "react";
import {
  Box,
  Text,
  VStack,
  Container,
  Flex,
} from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Capstone Project - Parking Spot Detection using LiDAR",
    icon: "brain.png", 
    organisation: "Rochester Institute of Technology",
    date: "Jan 2025 - Present",
    details: [
      "Leading the development of a 3D semantic segmentation system using CARLA simulator and LiDAR data for intelligent parking space detection in autonomous driving scenarios.",
      "Applied semantic filtering to isolate non-ground obstacle points; converted vehicle-local coordinates to global frame for mapping accuracy.",
      "Delivered real-time output to HD map layers in JSON format, enabling downstream integration in autonomous navigation stack."
    ]
  },
  {
    title: "Machine Learning Intern",
    icon: "brain.png", 
    organisation: "Goodyear Rubber and Tire Company",
    date: "May 2024 - December 2024",
    details: [
      "Developed YOLOv8-based object detection for edge deployment (Raspberry Pi), achieving 100ms latency with 95% precision—tailored for autonomous robotics perception stack.",
      "Built scalable S3 ingestion pipeline (50GB/day) and integrated PyTorch-based models with distributed training on NVIDIA A100 clusters using SLURM and multi-GPU training best practices.",
      "Deployed real-time inference models optimized for edge devices using quantization and model compression techniques."
    ]
  },
  {
    title: "Graduate Teaching Assistant - CS for AP students",
    icon: "brain.png", 
    organisation: "Rochester Institute of Technology",
    date: "August 2023 - April 2024",
    details: [
      "Facilitated hands-on coding labs, projects, and assignments in Python and Java while offering individualized support and mentoring to students facing challenges.",
      "Guided 30 students through lab sessions, worked closely with the instructor to design supplementary materials, and actively participated in enhancing a holistic learning experience."
    ]
  },
];

export default function Experience() {
  return (
    <Box as="main" minH="100vh" overflowY="auto" scrollSnapType="y mandatory" scrollBehavior="smooth">
      <Flex bg="green" minH="100vh">
        {/* Sidebar */}
        <Flex direction="column" width="80px" justify="center" align="center" p={4}>
          <Text transform="rotate(-90deg)" fontSize="2xl" fontWeight="bold" color="white" letterSpacing="widest">
            EXPERIENCE
          </Text>
        </Flex>

        {/* Timeline + Cards */}
        <Box position="relative" flex="1" px={6} py={12}>
          {/* Vertical timeline line */}
          <Box
            position="absolute"
            top={30}
            bottom={30}
            left="50%"
            width="2px"
            bg="black"
            zIndex={0}
          />

          <VStack spacing={24} align="stretch" position="relative" zIndex={1}>
            {experiences.map((exp, idx) => (
              <Flex
                key={idx}
                justify="center"
                w="100%"
              >
                <Box
                  w="480px"
                  transform={idx % 2 === 0 ? "translateX(-70%)" : "translateX(70%)"}
                >
                  <ExperienceCard experience={exp} />
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
