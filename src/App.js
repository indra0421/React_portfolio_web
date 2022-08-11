import React from 'react'
import {Navbar} from '../src/Components/Navbar/Navbar'
import './App.css'
import {Intro} from './Components/Intro/Intro'
import {Services} from './Components/Services/Services'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Services/>
      </div>
  );
}

export default App;
