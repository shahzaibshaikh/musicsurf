import { Grid, GridItem, Show } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeGrid from './components/HomeGrid';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '240px'
        }}
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside'>
            <SideMenu />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <Routes>
            <Route path='/' element={<HomeGrid />} />
            <Route path='/search' element={<>Search</>} />
            <Route path='/library' element={<>Library</>} />
          </Routes>
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
