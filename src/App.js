import React from 'react';
import NavBar from './components/nav-bar/NavBar'
import MasterHead from './components/master-head/MasterHead'
import GridInfo from './components/grid-info/GridInfo'
import About from './components/about/About'
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
        <NavBar/>
        <MasterHead/>
        <GridInfo/>
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
