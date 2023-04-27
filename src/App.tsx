import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryGrid from './pages/CategoryGrid';
import HomeGrid from './pages/HomeGrid';
import NavBar from './components/layout/NavBar';
import SearchGrid from './pages/SearchGrid';
import SideMenu from './components/layout/SideMenu';
import AlbumDetailScreen from './pages/AlbumDetailScreen';
import ArtistDetailScreen from './pages/ArtistDetailScreen';
import PlaylistDetailScreen from './pages/PlaylistDetailScreen';
import axios from 'axios';
import CategoryDetailScreen from './pages/CategoryDetailScreen';

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [isTokenReady, setIsTokenReady] = useState(true);

  useEffect(() => {
    const getToken = async (): Promise<string> => {
      const response = await axios.get(import.meta.env.VITE_AUTH_BASE_URL);
      return response.data.access_token;
    };

    const storedToken = localStorage.getItem('token');
    const storedExpiration = localStorage.getItem('tokenExpiration');

    if (
      !storedToken ||
      !storedExpiration ||
      new Date().getTime() > parseInt(storedExpiration)
    ) {
      getToken().then(token => {
        localStorage.setItem('token', token);
        const expirationTime = new Date().getTime() + 3600 * 1000;
        localStorage.setItem('tokenExpiration', expirationTime.toString());
        setIsTokenReady(true);
      });
    }
  }, []);

  // console.log(localStorage.getItem('token'));

  return (
    <BrowserRouter>
      {isTokenReady && (
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
              <Route path='/album/:albumID' element={<AlbumDetailScreen />} />
              <Route path='/artist/:artistID' element={<ArtistDetailScreen />} />
              <Route path='/playlist/:playlistID' element={<PlaylistDetailScreen />} />
              <Route path='/categories/:categoryID' element={<CategoryDetailScreen />} />
            </Routes>
          </GridItem>
        </Grid>
      )}
    </BrowserRouter>
  );
}

export default App;
