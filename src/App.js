import React from 'react'
import {Navbar} from '../src/Components/Navbar/Navbar'
import './App.css'
import {Intro} from './Components/Intro/Intro'
import {Services} from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import {Works} from './Components/Works/Works'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      </div>
  );
}

export default App;
