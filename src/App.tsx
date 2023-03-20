import { Grid, GridItem, Show } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
    >
      <GridItem area='nav' bg='red'>
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='blue'>
          Aside
        </GridItem>
      </Show>

      <GridItem area='main' bg='yellow'>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
