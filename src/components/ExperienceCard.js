// components/ExperienceCard.js
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
  CloseButton,
  Flex,
} from "@chakra-ui/react";

const ExperienceCard = ({ experience, isLeft }) => {
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
          {experience.organisation}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {experience.date}
        </Text>
      </Box>

      {/* Timeline Dot */}
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

export default ExperienceCard;
