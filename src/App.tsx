import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomeGrid from './components/HomeGrid';
import NavBar from './components/NavBar';
import SearchGrid from './components/SearchGrid';
import SideMenu from './components/SideMenu';
import { authorizeSpotify } from './store/actions/authorizeSpotify';

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>('');
  const dispatch = useDispatch<any>();
  const { loading, error, token } = useSelector((state: any) => state.spotify);

  useEffect(() => {
    if (window.location.pathname === '/search') {
      setSelectedPage('search');
    }
    if (!token) dispatch(authorizeSpotify());
  }, []);

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
        <GridItem area='main'>
          <Routes>
            <Route path='/' element={<HomeGrid />} />
            <Route path='/search' element={<SearchGrid />} />
            <Route path='/library' element={<>Library</>} />
          </Routes>
        </GridItem>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
