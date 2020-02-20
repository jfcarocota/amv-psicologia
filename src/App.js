import React from 'react';
import NavBar from './components/nav-bar/NavBar'
import MasterHead from './components/master-head/MasterHead'
import GridInfo from './components/grid-info/GridInfo'
import About from './components/about/About'

function App() {
  return (
    <div>
        <NavBar/>
        <MasterHead/>
        <GridInfo/>
        <About/>
    </div>
  );
}

export default App;
