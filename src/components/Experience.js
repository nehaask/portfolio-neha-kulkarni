import React from "react";
import {
    Box,
    Button,
    Dialog,
    Portal,
    DialogHeader,
    DialogBody,
    DialogContent,
    DialogTitle,
    DialogPositioner,
    DialogCloseTrigger,
    DialogBackdrop,
    CloseButton,
    VStack,
    Text,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
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
  
  const ExperienceItem = ({ experience }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <Box
          p={4}
          bg="white"
          shadow="md"
          borderLeft="4px solid teal"
          width="100%"
          position="relative"
        >
          <Text fontWeight="bold">{experience.title}</Text>
          <Text fontSize="sm" color="gray.500" mb={2}>
            {experience.date}
          </Text>
          <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
            View Details
          </Button>
  
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Portal>
              <DialogBackdrop />
              <DialogPositioner>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{experience.title}</DialogTitle>
                    <DialogCloseTrigger asChild>
                      <CloseButton size="sm" />
                    </DialogCloseTrigger>
                  </DialogHeader>
                  <DialogBody>
                    <VStack align="start" spacing={2} mt={2}>
                      {experience.details.map((item, index) => (
                        <Text fontSize="sm" key={index}>
                          • {item}
                        </Text>
                      ))}
                    </VStack>
                  </DialogBody>
                </DialogContent>
              </DialogPositioner>
            </Portal>
          </Dialog.Root>
        </Box>
      </>
    );
  };
  
  export default function Timeline() {
    return (
      <VStack spacing={6} p={6} bg="green.100" minH="100vh">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} experience={exp} />
        ))}
      </VStack>
    );
  }
  