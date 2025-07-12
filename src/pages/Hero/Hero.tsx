import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useAppSelector, RootState } from 'core/store';
import { generatePDF } from '@/utils/pdfGenerator';
import profileImage from '@/assets/profile.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import './Hero.scss';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const userProfile = useAppSelector(
    (state: RootState) => state.user.profile.main.data
  );

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    generatePDF();
  };

  const { roleTitle, firstName, lastName, objective } =
    userProfile.summary || {};

  return (
    <section ref={elementRef} className='hero section-padding'>
      <Container>
        <Row className='align-items-center min-vh-100'>
          <Col lg={6} className='hero__content'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className='hero__content-title'
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm
                <span className='text-gradient'>
                  {` ${firstName} ${lastName}`}
                </span>
              </motion.h1>

              <motion.h2
                className='hero__content-subtitle'
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {roleTitle}
              </motion.h2>

              <motion.p
                className='hero__content-description'
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {objective}
              </motion.p>

              <motion.div
                className='hero__content-buttons'
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  className='btn-primary-custom me-3 mb-3'
                  onClick={downloadCV}
                >
                  <Download size={18} className='me-2' />
                  Download CV
                </Button>
                <Button
                  variant='outline-primary'
                  className='btn-secondary-custom mb-3'
                  onClick={scrollToAbout}
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                className='hero__content-social'
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a
                  href='https://github.com/cloudtecki'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                >
                  <Github size={24} />
                </a>
                <a
                  href='https://linkedin.com/in/karthick-s-8732b379'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link'
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href='mailto:karthick.sprp18@gmail.com'
                  className='social-link'
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6} className='hero__image'>
            <motion.div
              className='hero__image-container'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              <div className='hero__image-wrapper'>
                <img
                  src={profileImage}
                  alt='Karthick S'
                  className='profile-image'
                />
                <div className='image-overlay'></div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className='scroll-indicator'
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
