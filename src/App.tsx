import React from 'react';
import { Header } from './components/Header/Header';
import { Teams } from './components/Sections/Teams';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Teams />
    </div>
  );
}

export default App;
