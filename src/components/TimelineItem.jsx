import { Box, Text } from "@chakra-ui/react";
import { Timeline } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

 const TimelineItem = ({ title, date, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      ref={ref}
      animation={inView ? "fadeIn 1s ease-in-out forwards" : "none"}
    >
      <Timeline.Item>
        <Timeline.Content flex="1" alignItems="flex-end">
          <Timeline.Title>{title}</Timeline.Title>
          <Timeline.Description>{date}</Timeline.Description>
          <Text fontSize="sm">{description}</Text>
        </Timeline.Content>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1" />
      </Timeline.Item>
    </Box>
  );
};
export default TimelineItem;
