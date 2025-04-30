import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Dialog,
  Portal,
  DialogBackdrop,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogPositioner,
  DialogCloseTrigger,
  CloseButton,
  Container,
  Flex,
  HStack,
} from "@chakra-ui/react";

const experiences = [
  {
    title: "Machine Learning Intern - Goodyear Rubber and Tire Company",
    date: "May 2024 - December 2024",
    details: [
      "Developed YOLOv8-based object detection for edge deployment (Raspberry Pi), achieving 100ms latency with 95% precision—tailored for autonomous robotics perception stack.",
      "Built scalable S3 ingestion pipeline (50GB/day) and integrated PyTorch-based models with distributed training on NVIDIA A100 clusters using SLURM and multi-GPU training best practices.",
      "Deployed real-time inference models optimized for edge devices using quantization and model compression techniques."
    ]
  },
  {
    title: "Graduate Teaching Assistant - CS for AP students",
    date: "Spring 2024",
    details: [
      "Facilitated hands-on coding labs, projects, and assignments in Python and Java while offering individualized support and mentoring to students facing challenges.",
      "Guided 30 students through lab sessions, worked closely with the instructor to design supplementary materials, and actively participated in enhancing a holistic learning experience."
    ]
  },
  {
    title: "Capstone Project - Parking Spot Detection using LiDAR",
    date: "Jan 2025 - Present",
    details: [
      "Leading the development of a 3D semantic segmentation system using CARLA simulator and LiDAR data for intelligent parking space detection in autonomous driving scenarios.",
      "Applied semantic filtering to isolate non-ground obstacle points; converted vehicle-local coordinates to global frame for mapping accuracy.",
      "Delivered real-time output to HD map layers in JSON format, enabling downstream integration in autonomous navigation stack."
    ]
  }
];

const ExperienceItem = ({ experience, isLeft }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex w="100%" justify={isLeft ? "flex-start" : "flex-end"} position="relative">
      {/* Card */}
      <Box
        onClick={() => setIsOpen(true)}
        p={4}
        bg="white"
        borderRadius="md"
        shadow="md"
        cursor="pointer"
        _hover={{ bg: "gray.100" }}
        w="45%"
      >
        <Text fontWeight="bold">{experience.title}</Text>
        <Text fontSize="sm" color="gray.500">
          {experience.date}
        </Text>
        <Text fontSize="sm" mt={2} color="teal.600">
          Click to view details
        </Text>
      </Box>

      {/* Vertical timeline and dot */}

      {/* Dot */}
      <Box
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        bg="black"
        w={4}
        h={4}
        borderRadius="full"
        zIndex={2}
      />

      {/* Dialog */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Portal>
          <DialogBackdrop />
          <DialogPositioner>
            <DialogContent maxW="2xl" minW="500px" px={6} py={4}>
              <DialogHeader>
                <DialogTitle>{experience.title}</DialogTitle>
                <CloseButton
                  size="sm"
                  position="absolute"
                  top="1rem"
                  right="1rem"
                  onClick={() => setIsOpen(false)}
                />
              </DialogHeader>
              <DialogBody>
                <VStack align="start" spacing={2} mt={2}>
                  {experience.details.map((line, idx) => (
                    <Text fontSize="sm" key={idx}>
                      • {line}
                    </Text>
                  ))}
                </VStack>
              </DialogBody>
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </Dialog.Root>

    </Flex>
  );
};

export default function Experience() {
  return (
    <Flex bg="green" minH="100vh">
      {/* Sidebar */}
      <Flex direction="column" width="80px" justify="center" align="center">
        <Text transform="rotate(-90deg)" fontSize="2xl" fontWeight="bold" color="white" letterSpacing="widest">
          EXPERIENCE
        </Text>
      </Flex>

      {/* Timeline container */}
      <Box flex="1" py={12}>
        <Container maxW="container.lg">
          <VStack spacing={16} position="relative">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} experience={exp} isLeft={idx % 2 === 0} />
            ))}
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
