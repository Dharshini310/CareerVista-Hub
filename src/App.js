import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp'; // Use PascalCase for component names
// import About from './components/Blank';

function App() {
  return (
    <div className="App">
      <NavbarComp /> {/* Use PascalCase for component names */}
      {/* <About /> */}
    </div>
  );
}

export default App;
