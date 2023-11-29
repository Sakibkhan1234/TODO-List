import React from 'react'
import TODO from './components/TODO'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Demo from './components/Demo'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
     <div>
      <h1 id='h'>TODO LIST</h1>
    <div id='Border'>
     <BrowserRouter>
     <div id='b'>
     <Routes>
      <Route element={<Demo/>} path="demo/:id"/>
     </Routes>
     </div>
     <div id='a'>
      <TODO/>
      </div>
     </BrowserRouter>
    </div>
    </div>
  )
}

export default App
