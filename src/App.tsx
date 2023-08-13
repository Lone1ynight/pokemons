import React from 'react';
import './App.scss';
import { Pokemons } from './components/pokemons/Pokemons';

function App() {
  return (

      <div className="App">
        <div className="titleWrapper"><div className="title">Pokemon Dex</div></div>
        <Pokemons />
      </div>
  );
}

export default App;
