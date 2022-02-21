import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Mobile.css'
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Investment from './pages/Investment';
import Families from './pages/Families';
import RealEstate from './pages/RealEstate';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ScrollBtn from './components/ScrollBtn';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weddings' element={<Weddings />} />
        <Route path='/families' element={<Families />} />
        <Route path='/real-estate' element={<RealEstate />} />
        <Route path='/investment' element={<Investment />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </ScrollToTop>
    </Router>
    <ScrollBtn />
    </>
  );
}

export default App;
