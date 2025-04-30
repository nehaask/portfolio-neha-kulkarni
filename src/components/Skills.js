import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const skills = [
  {
    title: "Web Dev",
    image: "/images/web-dev.png",
    items: ["HTML/CSS/JavaScript", "Node.js / NPM", "React.js"],
  },
  {
    title: "Mobile Dev",
    image: "/images/mobile-dev.png",
    items: ["Swift", "Xcode", "Storyboards", "SwiftUI", "ARKit", "CoreML"],
  },
  {
    title: "Electronics",
    image: "/images/electronics.png",
    items: ["Electronic Circuits", "RF Circuits", "Troubleshooting", "IPC Standard Soldering"],
  },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const pieData = skills.map((skill) => ({
  name: skill.title,
  value: skill.items.length,
}));

export default function Skills() {
  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <Flex direction="column" width="80px">
        <Box
          flex="1"
          bg="white"
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
            color="green"
          >
            SKILLS
          </Text>
        </Box>
      </Flex>

      {/* Main Content */}
      <Box flex="1" bg="white" py={10} px={{ base: 6, md: 20 }}>
        <Container maxW="container.md">
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Container>
      </Box>
    </Flex>
  );
}
