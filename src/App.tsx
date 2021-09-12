import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/Homepage';
import './App.css';

const App: FC = () => {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
