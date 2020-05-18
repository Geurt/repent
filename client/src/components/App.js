import React from 'react';
import '../styles/main.scss';

import ConfessionList from './ConfessionList';
import ConfessionalBooth from './ConfessionalBooth';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ConfessionalBooth />
        <ConfessionList />
      </div>
    </>
  );
}

export default App;
