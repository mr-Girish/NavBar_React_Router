import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
     <BrowserRouter>
          <Routes>
              <Route  path="/" element={<Navbar/>} />
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
