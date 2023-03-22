import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomeGrid from './components/HomeGrid';
import NavBar from './components/NavBar';
import SearchGrid from './components/SearchGrid';
import SideMenu from './components/SideMenu';
import { setToken } from './store/slices/spotifySlice';

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>('');
  const dispatch = useDispatch<any>();
  const { loading, error, token } = useSelector((state: any) => state.spotify);

  useEffect(() => {
    if (window.location.pathname === '/search') {
      setSelectedPage('search');
    }
    if (!token) {
      // check if token exists
      const hashParams = window.location.hash
        .substring(1)
        .split('&')
        .reduce(function (result: any, item: string) {
          var parts = item.split('=');
          result[parts[0]] = parts[1];
          return result;
        }, {});

      if (hashParams.access_token) {
        dispatch(setToken(hashParams.access_token));
      } else {
        const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
        const REDIRECT_URI: any = import.meta.env.VITE_REDIRECT_URI;
        const SCOPE = 'user-read-private%20user-read-email';
        const STATE = 'spotify-auth';

        const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`;

        window.location.href = url;
      }
    }
  }, [dispatch, token]);

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
