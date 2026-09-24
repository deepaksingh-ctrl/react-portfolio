import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import '../src/App.css';


function App() {
 
  return (
    <>

     <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<About/>} />
                <Route path="/projects" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
  
    </>
  )
}

export default App
