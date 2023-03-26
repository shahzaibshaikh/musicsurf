import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/searchSlice';

function SearchInput(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  return (
    <form
      style={{ width: '100%' }}
      onSubmit={event => {
        event.preventDefault();
        dispatch(setSearch(searchQuery));
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch color='black' />} />

        <Input
          onChange={event => setSearchQuery(event.target.value)}
          value={searchQuery}
          width={{
            base: '100%',
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
