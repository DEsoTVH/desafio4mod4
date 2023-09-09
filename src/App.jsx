import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';


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
