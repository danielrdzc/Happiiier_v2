import React from 'react';
import './App.css';
import { RouterRoutes } from './components/layout/RouterRoutes';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <RouterRoutes></RouterRoutes>
    </BrowserRouter>
  );
}

export default App;
