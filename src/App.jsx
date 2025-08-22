import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Writing from './pages/Writing';
import WritingEntry from './pages/WritingEntry';
import Reflections from './pages/Reflections';
import ReflectionEntry from './pages/ReflectionEntry';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<WritingEntry />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/reflections/:date" element={<ReflectionEntry />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;