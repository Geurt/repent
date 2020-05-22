import React from 'react';
import '../styles/main.scss';

import Header from './Header';
import ConfessionalBooth from './ConfessionalBooth';
import ConfessionsFilter from './ConfessionsFilter';
import ConfessionList from './ConfessionList';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ConfessionalBooth />
        <ConfessionsFilter />
        <ConfessionList />
      </div>
    </>
  );
}

export default App;
