import React from "react";
import { Box, Flex, Text, Container } from "@chakra-ui/react";
import { Timeline } from "@chakra-ui/react";

export default function ExperienceTimeline() {
  return (
    <Flex height="100vh">
        {/* Sidebar */}
        <Flex direction="column" width="80px">
          <Box
            flex="1"
            bg="green"
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
              color="white"
            >
              INTERNSHIPS
            </Text>
          </Box>
        </Flex>

      <Box flex="1" bg="green" py={10} px={{ base: 6, md: 20 }}>
        {/* <Text fontSize="3xl" fontWeight="bold" mb={8}>
          My Experience
        </Text> */}

        <Container maxW="container.lg" p={0}>
          <Timeline.Root size="md" variant="outline">
            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Timeline.Title>Machine Learning Intern - Goodyear Rubber and Tire Company</Timeline.Title>
                <Timeline.Description>May 2024 - December 2024</Timeline.Description>
                <Text fontSize="sm">
                - Designed and maintained a robust, scalable data pipeline leveraging AWS S3 to process and analyze 50 GB of weather API data efficiently handling Ĩ million daily data points
                </Text>
                <Text fontSize="sm">
                - Implemented and evaluated supervised and unsupervised ML models using PyTorch and scikit-learn, achieving 15% accuracy improvement over baseline with 94% overall prediction accuracy
                </Text>
                <Text fontSize="sm">
                - Optimized the model for edge computing, reducing inference time by 65% and successfully deployed on Raspberry Pi for real-time forecasting with 100ms latency
                </Text>
                <Text fontSize="sm">
                - Developed a YOLOv8-based object detection model in PyTorch and OpenCV for real-time face and license plate anonymization. Trained the model from scratch on a GPU cluster, using NVIDIA CUDA for acceleration while maintaining 95% detection accuracy using a training set of 60,000+ images
                </Text>
                <Text fontSize="sm">
                - Leveraged HPC cluster programming with SLURM for distributed parallel model training, significantly reduced training time by 40% across 2 A100 nodes
                </Text>
                <Text fontSize="sm">
                - Utilized NVIDIA Jetson Orin for model training and inference, while optimizing edge deployment on Raspberry Pi devices, collaborating with cross-functional teams to integrate into production workflows
                </Text>
                <Text fontSize="sm">
                - Created Test Harnesses for Tire Leak Detection models and automated Simulink testing frameworks. Automated 20+ test cases using Test Manager and achieving 100% model coverage across decision, condition, and MCDC metrics
                </Text>
                
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator />
              </Timeline.Connector>
              <Timeline.Content flex="1" />
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end" />
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator />
              </Timeline.Connector>
              <Timeline.Content flex="1">
                <Timeline.Title>Graduate Teaching Assistant - CS for AP students</Timeline.Title>
                <Timeline.Description>Spring 2025</Timeline.Description>
                <Text fontSize="sm">
                - Facilitated hands-on coding labs, projects, and assignments in Python and Java while offering individualized support and mentoring to students facing challenges.
                </Text>
                <Text fontSize="sm">
                - Guided 30 students through lab sessions, worked closely with the instructor to design supplementary materials, and actively participated in enhancing a holistic learning experience by clarifying coding concepts and assisting in debugging.
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Timeline.Title>Title</Timeline.Title>
                <Timeline.Description>Dates</Timeline.Description>
                <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Text>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator />
              </Timeline.Connector>
              <Timeline.Content flex="1" />
            </Timeline.Item>
          </Timeline.Root>
        </Container>
      </Box>
    </Flex>
  );
}
