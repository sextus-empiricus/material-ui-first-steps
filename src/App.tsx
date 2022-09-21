import React from 'react';
import { Container } from '@mui/material';
import { TourCard } from './components/TourCard/TourCard';
import './App.css';

const App = () => (
   <div className="App">
      <Container>
         <TourCard />
      </Container>
   </div>
);

export { App };
