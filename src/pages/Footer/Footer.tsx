import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { RootState, useAppSelector } from 'core/store';

import './Footer.scss';

const Footer: React.FC = () => {
  const userProfile = useAppSelector(
    (state: RootState) => state.user.profile.main.data
  );

  const { summary } = userProfile;

  const { firstName, lastName } = summary;

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/cloudtecki',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/karthick-s-8732b379',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:john@example.com',
      label: 'Email',
    },
  ];

  const firstLetter = firstName.at(0);
  const lastLetter = lastName.at(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6} className='mb-3 mb-md-0'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='footer__brand'
            >
              <h4 className='footer__brand-text' onClick={scrollToTop}>
                {firstLetter}
                {lastLetter}
              </h4>
              <p className='footer__brand-description'>
                Building digital experiences with passion and precision.
              </p>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='footer__social'
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__social-link'
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </Col>
        </Row>

        <hr className='footer__divider' />

        <Row>
          <Col className='text-center'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='footer__copyright'
            >
              © {new Date().getFullYear()} {firstName} {lastName}. Made with
              <Heart size={16} className='footer__heart-icon' /> using React &
              TypeScript
            </motion.p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
