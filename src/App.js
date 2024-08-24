import './App.css';
import React from 'react';
import Routing from './Router';
import { DataProvider } from './Components/DataProvider/DataProvider'; // Import the DataProvider

function App() {
  return (
    <DataProvider>
      <Routing />
    </DataProvider>
  );
}

export default App;
