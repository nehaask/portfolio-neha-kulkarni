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
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";

const ExperienceCard = ({ experience, isLeft }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex w="100%" justify={isLeft ? "flex-start" : "flex-end"} position="relative">
      {/* Card */}
      <Box
          onClick={() => setIsOpen(true)}
          p={6}
          bg="white"
          borderRadius="md"
          shadow="md"
          cursor="pointer"
          _hover={{ bg: "gray.100" }}
          maxW="md"
          w="100%"
        >
          <Flex align="center" mb={2}>
            {experience.image && (
              <Image
                src={experience.icon}
                alt={`${experience.organisation} logo`}
                boxSize="40px"
                objectFit="contain"
                mr={4}
                borderRadius="md"
              />
            )}
            <Box>
              <Text fontWeight="bold">{experience.title}</Text>
              <Text fontSize="sm" color="black">
                {experience.organisation}
              </Text>
              <Text fontSize="sm" color="black">
                {experience.date}
              </Text>
            </Box>
          </Flex>
          
          {experience.link && (
            <Link
              href={experience.link}
              color="black"
              fontSize="sm"
              mt={2}
              isExternal
              display="inline-block"
            >
              Visit Website
            </Link>
          )}
        </Box>


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
