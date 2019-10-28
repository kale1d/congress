import React, { FC } from 'react';
import './App.scss';
import CongressList from './containers/CongressList/CongressList';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="wrapper">
      <CongressList />
      </div>
    </div>
  );
}

export default App;
