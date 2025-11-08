import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import PriceList from './pages/PriceList';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';
import Learn from './pages/Learn';
import './App.css';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="App">
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricelist" element={<PriceList />} />
            <Route path="/belajar" element={<Learn />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
