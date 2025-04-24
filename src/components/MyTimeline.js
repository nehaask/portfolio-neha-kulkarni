// import React from "react";
// import { Box, Flex, Text, Container } from "@chakra-ui/react";
// import { Timeline } from "@chakra-ui/react";

// export default function ExperienceTimeline() {
//   return (
//     <Flex height="100vh">
//         {/* Sidebar */}
//         <Flex direction="column" width="80px">
//           <Box
//             flex="1"
//             bg="green"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Text
//               transform="rotate(-90deg)"
//               fontWeight="bold"
//               letterSpacing="widest"
//               textAlign="center"
//               fontSize="2xl"
//               color="white"
//             >
//               EXPERIENCE
//             </Text>
//           </Box>
//         </Flex>

//       <Box flex="1" bg="green" py={10} px={{ base: 6, md: 20 }}>
//         {/* <Text fontSize="3xl" fontWeight="bold" mb={8}>
//           My Experience
//         </Text> */}

//         <Container maxW="container.lg" p={0}>
//           <Timeline.Root size="md" variant="outline">
//             <Timeline.Item>
//               <Timeline.Content flex="1" alignItems="flex-end">
//                 <Timeline.Title>Machine Learning Intern - Goodyear Rubber and Tire Company</Timeline.Title>
//                 <Timeline.Description>May 2024 - December 2024</Timeline.Description>
//                 <Text fontSize="sm">
//                 • Developed YOLOv8-based object detection for edge deployment (Raspberry Pi), achieving 100ms latency with 95% precision—tailored for autonomous robotics perception stack.
//                 </Text>
//                 <Text fontSize="sm">
//                 • Built scalable S3 ingestion pipeline (50GB/day) and integrated PyTorch-based models with distributed training on NVIDIA A100 clusters using SLURM and multi-GPU training best practices
//                 </Text>
//                 <Text fontSize="sm">
//                 • Deployed real-time inference models optimized for edge devices using quantization and model compression techniques.
//                 </Text>
                
//               </Timeline.Content>
//               <Timeline.Connector>
//                 <Timeline.Separator />
//                 <Timeline.Indicator />
//               </Timeline.Connector>
//               <Timeline.Content flex="1" />
//             </Timeline.Item>

//             <Timeline.Item>
//               <Timeline.Content flex="1" alignItems="flex-end" />
//               <Timeline.Connector>
//                 <Timeline.Separator />
//                 <Timeline.Indicator />
//               </Timeline.Connector>
//               <Timeline.Content flex="1">
//                 <Timeline.Title>Graduate Teaching Assistant - CS for AP students</Timeline.Title>
//                 <Timeline.Description>Spring 2024 </Timeline.Description>
//                 <Text fontSize="sm">
//                 - Facilitated hands-on coding labs, projects, and assignments in Python and Java while offering individualized support and mentoring to students facing challenges.
//                 </Text>
//                 <Text fontSize="sm">
//                 - Guided 30 students through lab sessions, worked closely with the instructor to design supplementary materials, and actively participated in enhancing a holistic learning experience by clarifying coding concepts and assisting in debugging.
//                 </Text>
//               </Timeline.Content>
//             </Timeline.Item>

//             <Timeline.Item>
//               <Timeline.Content flex="1" alignItems="flex-end">
//                 <Timeline.Title>Capstone Project - Parking Spot Detection using LiDAR</Timeline.Title>
//                 <Timeline.Description>Jan 2025 - Present</Timeline.Description>
//                 <Text fontSize="sm">
//                 • Leading the development of a 3D semantic segmentation system using CARLA simulator and LiDAR data for intelligent parking space detection in autonomous driving scenarios.
// {/* Designed and implemented an end-to-end perception pipeline:
// LiDAR → Ground Filtering → Coordinate Conversion → DBSCAN Clustering → Centroid Check → Polygon Test → HD Map JSON Output. */}
//                 </Text>
//                 <Text fontSize="sm">
//                 Applied semantic filtering to isolate non-ground obstacle points; converted vehicle-local coordinates to global frame for mapping accuracy.
//                 </Text>
//                 {/* <Text fontSize="sm"> */}
// {/* Tuned DBSCAN parameters (eps=2m, min_samples=100) for optimal vehicle-scale detection in parking lot ranges up to 50m. */}
// {/* • Developed real-time occupancy detection logic by intersecting centroids with predefined parking spot polygons, achieving >92% accuracy in simulation. */}
//               {/* </Text> */}
//                 <Text fontSize="sm">
//                 • Delivered real-time output to HD map layers in JSON format, enabling downstream integration in autonomous navigation stack.
//               </Text>

//               </Timeline.Content>
//               <Timeline.Connector>
//                 <Timeline.Separator />
//                 <Timeline.Indicator />
//               </Timeline.Connector>
//               <Timeline.Content flex="1" />
//             </Timeline.Item>
//           </Timeline.Root>
//         </Container>
//       </Box>
//     </Flex>
//   );
// }
import {
  Box,
  Flex,
  Text,
  VStack,
  useDisclosure,
  Container,
  Button,
  CloseButton,
  Portal,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogTitle,
  DialogPositioner,
  DialogBackdrop,
  DialogCloseTrigger,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const timelineData = [
  {
    title: "Machine Learning Intern",
    org: "Goodyear Rubber and Tire Company",
    date: "May 2024 - Dec 2024",
    side: "left",
    details: ["Developed YOLOv8-based object detection for edge deployment (Raspberry Pi), achieving 100ms latency with 95% precision—tailored for autonomous robotics perception stack."],
  },
  {
    title: "Graduate Teaching Assistant",
    org: "Rochester Institute Of Technology",
    date: "Aug 2023 - Aug 2024",
    side: "right",
    details: ["Assisted in CS courses, mentored students, and graded assignments."],
  },
  {
    title: "Master of Science in Data Science",
    org: "Rochester Institute of Technology, Rochester, NY",
    date: "Aug 2022 - Dec 2024",
    side: "left",
    details: ["Specialized in machine learning, statistical modeling, and big data analytics."],
  },
];

const TimelineItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w="100%" justify={item.side === "left" ? "flex-start" : "flex-end"} position="relative">
      <Box w="45%" p={4} bg="white" borderRadius="md" shadow="md">
        <Text fontWeight="bold" color="black">
          {item.title}
        </Text>
        <Text color="black">{item.org}</Text>
        <Text fontSize="sm" color="black">
          {item.date}
        </Text>
        <Text
          mt={2}
          fontSize="sm"
          color="black"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
          onClick={onOpen}
        >
          Click to view details
        </Text>
      </Box>

      {/* Center dot & line */}
      <Flex
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        direction="column"
        align="center"
      >
        <Box h="100%" w="2px" bg="purple.500" />
        <Box w={4} h={4} bg="purple.500" borderRadius="full" />
      </Flex>

      <Dialog.Root>
      <Dialog.Trigger asChild>
        <CloseButton size="sm" />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Context>
              {(store) => (
                <DialogBody>
                <VStack align="start" spacing={2} mt={2}>
                  {item.details.map((line, idx) => (
                    <Text fontSize="sm" key={idx}>
                      • {line}
                    </Text>
                  ))}
                </VStack>
              </DialogBody>
              )}
            </Dialog.Context>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
    </Flex>
  );
};

export default function MyTimeline() {
  return (
    <Flex bg="green" color="white" minH="100vh">
      {/* Vertical Sidebar Label */}
      <Flex direction="column" width="80px" bg="green" justify="center" align="center">
        <Text transform="rotate(-90deg)" fontSize="2xl" fontWeight="bold" color="white" letterSpacing="widest">
          EXPERIENCE
        </Text>
      </Flex>

      <Box flex="1" py={12}>
        <Container maxW="container.lg">
          <VStack spacing={16} position="relative">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
