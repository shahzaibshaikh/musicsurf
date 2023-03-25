import { Box, Text, Image } from '@chakra-ui/react';
import { Categories } from '../store/slices/categorySlice';

interface CategoryCardProps {
  data: Categories;
}

function CategoryCard({ data }: CategoryCardProps): JSX.Element {
  return (
    <Box
      borderRadius={8}
      height='210px'
      overflow='hidden'
      position='relative'
      boxShadow='0 8px 8px rgba(0, 0, 0, .2)'
    >
      <Image src={data.icons[0].url} objectFit='cover' width='100%' height='100%' />
      <Box
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        zIndex='1'
        bgGradient='linear(0deg, rgba(0,0,0,0.9990589985994398) 4%, rgba(0,0,0,0) 64%)'
      />
      <Text
        position='absolute'
        top='80%'
        left='50%'
        transform='translate(-50%, -50%)'
        zIndex='2'
        color='white'
        fontWeight={700}
        fontSize='2xl'
        textAlign='center'
      >
        {data.name}
      </Text>
    </Box>
  );
}

export default CategoryCard;
