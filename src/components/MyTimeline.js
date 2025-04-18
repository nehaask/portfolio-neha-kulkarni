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
              EXPERIENCE
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
                • Developed YOLOv8-based object detection for edge deployment (Raspberry Pi), achieving 100ms latency with 95% precision—tailored for autonomous robotics perception stack.
                </Text>
                <Text fontSize="sm">
                • Built scalable S3 ingestion pipeline (50GB/day) and integrated PyTorch-based models with distributed training on NVIDIA A100 clusters using SLURM and multi-GPU training best practices
                </Text>
                <Text fontSize="sm">
                • Deployed real-time inference models optimized for edge devices using quantization and model compression techniques.
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
                <Timeline.Description>Spring 2024 </Timeline.Description>
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
                <Timeline.Title>Capstone Project - Parking Spot Detection using LiDAR</Timeline.Title>
                <Timeline.Description>Jan 2025 - Present</Timeline.Description>
                <Text fontSize="sm">
                • Leading the development of a 3D semantic segmentation system using CARLA simulator and LiDAR data for intelligent parking space detection in autonomous driving scenarios.
{/* Designed and implemented an end-to-end perception pipeline:
LiDAR → Ground Filtering → Coordinate Conversion → DBSCAN Clustering → Centroid Check → Polygon Test → HD Map JSON Output. */}
                </Text>
                <Text fontSize="sm">
                Applied semantic filtering to isolate non-ground obstacle points; converted vehicle-local coordinates to global frame for mapping accuracy.
                </Text>
                {/* <Text fontSize="sm"> */}
{/* Tuned DBSCAN parameters (eps=2m, min_samples=100) for optimal vehicle-scale detection in parking lot ranges up to 50m. */}
{/* • Developed real-time occupancy detection logic by intersecting centroids with predefined parking spot polygons, achieving >92% accuracy in simulation. */}
              {/* </Text> */}
                <Text fontSize="sm">
                • Delivered real-time output to HD map layers in JSON format, enabling downstream integration in autonomous navigation stack.
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
