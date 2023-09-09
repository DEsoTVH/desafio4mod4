import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';


function App() {


  return (
    <>
        <Background/>
        <Header/>
        <MiApi/>
        <Footer/>
    </>
  )
}

export default App
