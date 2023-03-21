import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

function SearchInput(): JSX.Element {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch color='black' />} />

        <Input
          width={{
            md: '300px',
            lg: '530px'
          }}
          borderRadius={20}
          placeholder='What do you want to listen to?'
          variant='filled'
          background='white'
          fontSize='13px'
          color='#202020'
          _hover={{ background: 'white' }}
          _focus={{ background: 'white' }}
          _placeholder={{ color: '#202020' }}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
