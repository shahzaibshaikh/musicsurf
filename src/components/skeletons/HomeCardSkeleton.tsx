import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function HomeCardSkeleton() {
  return (
    <Card
      background='#1b1b1b'
      padding={4}
      boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
      borderRadius={5}
    >
      <Skeleton height='200px' />
      <CardBody padding={0} marginTop={4}>
        <SkeletonText marginBottom={1} />
      </CardBody>
    </Card>
  );
}

export default HomeCardSkeleton;
