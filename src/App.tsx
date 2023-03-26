import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryGrid from './pages/CategoryGrid';
import HomeGrid from './pages/HomeGrid';
import NavBar from './components/layout/NavBar';
import SearchGrid from './pages/SearchGrid';
import SideMenu from './components/layout/SideMenu';
import useSpotify from './hooks/useSpotify';
import AlbumDetailScreen from './pages/AlbumDetailScreen';

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>('');

  const { loading, error, token } = useSpotify();

  return (
    <BrowserRouter>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"aside nav" "aside main"`
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '240px'
        }}
      >
        {/* Navbar */}
        <GridItem area='nav'>
          <NavBar />
        </GridItem>

        {/* Side Menu */}
        <Show above='lg'>
          <GridItem area='aside'>
            <SideMenu
              selectedPage={selectedPage}
              setOnSearch={(page: string) => setSelectedPage(page)}
            />
          </GridItem>
        </Show>

        {/* Main Page */}
        <GridItem area='main' background='gray.800'>
          <Routes>
            <Route path='/' element={<HomeGrid />} />
            <Route path='/search' element={<SearchGrid />} />
            <Route path='/categories' element={<CategoryGrid />} />
            <Route path='/library' element={<>Library</>} />
            <Route path='/album/:albumID' element={<AlbumDetailScreen />} />
          </Routes>
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
