import { Badge, HStack, Text } from '@chakra-ui/react';

interface PopularityBadgeProps {
  score: number;
}

function PopularityBadge({ score }: PopularityBadgeProps) {
  let color: string = '';
  if (score >= 75) {
    color = 'green';
  }
  if (score >= 55) {
    color = 'yellow';
  }
  if (score <= 54) {
    color = 'red';
  }
  return (
    <HStack marginTop={-4}>
      <Text fontWeight={700} textShadow='0 0px 12px rgba(0, 0, 0, 0.5)'>
        Popularity
      </Text>
      <Badge colorScheme={color} borderRadius={4} fontSize={14} background='#202020'>
        {score}
      </Badge>
    </HStack>
  );
}

export default PopularityBadge;
