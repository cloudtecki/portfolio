import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { store } from 'core/store/configureStore';
import { generatePDF } from '@/utils/pdfGenerator';
import ThemeToggle from './pages/ThemeToggle/ThemeToggle';
import Header from './pages/Header/Header';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';

import './App.scss';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <ThemeToggle />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        {/* Floating Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              className='floating-btn'
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUp />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating PDF Download Button */}
        <motion.button
          className='floating-btn pdf-btn'
          onClick={generatePDF}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title='Download Resume as PDF'
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          📄
        </motion.button>
      </div>
    </Provider>
  );
}

export default App;
