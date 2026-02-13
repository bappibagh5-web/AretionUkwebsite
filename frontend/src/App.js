import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import GroupCompanies from './pages/GroupCompanies';
import Governance from './pages/Governance';
import Standards from './pages/Standards';
import Newsroom from './pages/Newsroom';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { Toaster } from './components/ui/sonner';
import './styles/theme.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/group-companies" element={<GroupCompanies />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
