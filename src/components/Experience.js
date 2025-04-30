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
    title: "Machine Learning Intern",
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
    organisation: "Rochester Institute of Technology",
    date: "Spring 2024",
    details: [
      "Facilitated hands-on coding labs, projects, and assignments in Python and Java while offering individualized support and mentoring to students facing challenges.",
      "Guided 30 students through lab sessions, worked closely with the instructor to design supplementary materials, and actively participated in enhancing a holistic learning experience."
    ]
  },
  {
    title: "Capstone Project - Parking Spot Detection using LiDAR",
    organisation: "Rochester Institute of Technology",
    date: "Jan 2025 - Present",
    details: [
      "Leading the development of a 3D semantic segmentation system using CARLA simulator and LiDAR data for intelligent parking space detection in autonomous driving scenarios.",
      "Applied semantic filtering to isolate non-ground obstacle points; converted vehicle-local coordinates to global frame for mapping accuracy.",
      "Delivered real-time output to HD map layers in JSON format, enabling downstream integration in autonomous navigation stack."
    ]
  }
];

export default function Experience() {
  return (
    <Box as="main" h="100vh" overflowY="scroll" scrollSnapType="y mandatory" scrollBehavior="smooth">
      <Flex bg="green" minH="100vh">
        {/* Sidebar */}
        <Flex direction="column" width="80px" justify="center" align="center">
          <Text transform="rotate(-90deg)" fontSize="2xl" fontWeight="bold" color="white" letterSpacing="widest">
            EXPERIENCE
          </Text>
        </Flex>

        {/* Timeline container */}
        <Box id="experience" h="100vh" scrollSnapAlign="start" flex="1" py={12}>
          <Container maxW="container.lg">
            <VStack spacing={16} position="relative">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} experience={exp} isLeft={idx % 2 === 0} />
              ))}
            </VStack>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}
