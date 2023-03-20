import { Grid, GridItem, Show } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <BrowserRouter>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '250px'
        }}
      >
        <GridItem area='nav'>
          <div style={{ height: '8vh' }}>Nav</div>
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside'>
            <SideMenu />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <Routes>
            <Route path='/' element={<>Home</>} />
            <Route path='/search' element={<>Search</>} />
            <Route path='/library' element={<>Library</>} />
          </Routes>
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
