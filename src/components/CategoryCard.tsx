import { Card, CardBody, Heading } from '@chakra-ui/react';

interface CategoryCardProps {
  cardColor: string;
}

function CategoryCard({ cardColor }: CategoryCardProps): JSX.Element {
  return (
    <Card background={cardColor} padding={4} borderRadius={5} height='210px'>
      <CardBody padding='8px 0 0 0'>
        <Heading fontSize='24px'>Title</Heading>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
