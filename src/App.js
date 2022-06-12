import React from 'react';
import { Container } from '@mui/system';
import { APIContextProvider } from './context/apiContext';
import { MainLayout } from './containers/MainLayout/MainLayout';
import './App.css';
function App() {
  return (
    
    <APIContextProvider>
      <Container>
        <MainLayout />
      </Container>
    </APIContextProvider>
  );
}

export default App;
