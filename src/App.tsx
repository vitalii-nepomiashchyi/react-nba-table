import React from 'react';
import { Header } from './components/Header/Header';
import { Teams } from './components/Sections/Teams';
import { Players } from 'components/Sections/Players';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Teams />
      <Players />
    </div>
  );
}

export default App;
