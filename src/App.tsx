import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { VeilleTechno } from './pages/VeilleTechno';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Documentation } from './pages/Documentation';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veille" element={<VeilleTechno />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;