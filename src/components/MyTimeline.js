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


      {/* Main Content */}
      <Box flex="1" bg="green" py={10} px={{ base: 6, md: 20 }}>
        {/* <Text fontSize="3xl" fontWeight="bold" mb={8}>
          My Experience
        </Text> */}

        <Container maxW="container.lg" p={0}>
          <Timeline.Root size="md" variant="outline">
            <Timeline.Item>
              <Timeline.Content flex="1" alignItems="flex-end">
                <Timeline.Title>Goodyear Rubber and Tire Company</Timeline.Title>
                <Timeline.Description>May 2024 - December 2024</Timeline.Description>
                <Text fontSize="sm">
                  Developed a weather-based road surface state prediction system and anonymized faces/license plates using YOLO. Worked with sensor-based analytics and ADAS systems.
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
                <Timeline.Title>Capstone – LiDAR Parking Detection</Timeline.Title>
                <Timeline.Description>Spring 2025</Timeline.Description>
                <Text fontSize="sm">
                  Built a CARLA-based parking space detection system using LiDAR and 3D point cloud data.
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
