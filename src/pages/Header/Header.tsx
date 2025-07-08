import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLazyGetProfileQuery } from 'core/entities/user/profile/queries';
import { useParallax } from '@/hooks/useParallax';

import './Header.scss';

const headerList = ['about', 'skills', 'experience', 'projects', 'contact'];
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const parallaxOffset = useParallax(0.3);

  const [getProfile] = useLazyGetProfileQuery();

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className='header-bg-animation'
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className='header-bg-animation__floating-shapes'>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.header
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Navbar expand='lg' className='navbar-custom'>
          <Container>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Navbar.Brand href='#' className='brand'>
                <span className='brand-text'>KS</span>
              </Navbar.Brand>
            </motion.div>

            <Navbar.Toggle
              aria-controls='basic-navbar-nav'
              className='navbar-toggler-custom'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </Navbar.Toggle>

            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {headerList.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Nav.Link
                      href={`#${item}`}
                      className='nav-link-custom'
                      onClick={() => scrollToSection(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Nav.Link>
                  </motion.div>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.header>
    </>
  );
};

export default Header;
