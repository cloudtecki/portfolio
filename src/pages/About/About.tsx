import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useAppSelector, RootState } from 'core/store';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import HtmlContentViewer from '@/components/HtmlContentViewer/HtmlContentViewer';

import './About.scss';

const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const userProfile = useAppSelector(
    (state: RootState) => state.user.profile.main.data
  );

  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description:
        'Optimizing applications for speed and exceptional user experience.',
    },
    {
      icon: <Palette size={32} />,
      title: 'More Design-Focused',
      description:
        'I turn design mockups into clean, user-friendly, and consistent web interfaces.',
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description:
        'Working effectively with teams and communicating ideas clearly.',
    },
  ];

  const userSummary = userProfile.summary;

  return (
    <section id='about' ref={elementRef} className='about section-padding'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='section-header text-center mb-5'
        >
          <h2 className='section-title'>About Me</h2>
          <p className='section-subtitle'>
            Passionate developer with a love for creating exceptional digital
            experiences
          </p>
        </motion.div>

        <Row className='align-items-center'>
          <Col lg={6} className='mb-4 mb-lg-0'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='about__content'
            >
              <h3 className='about__content-title'>
                Building Digital Solutions
              </h3>
              <HtmlContentViewer
                html={userSummary.summary || ''}
                className='about__content-text'
              />
              <div className='about__content-stats'>
                <div className='stat-item'>
                  <h4>{userSummary.projectCompleted}</h4>
                  <span>Projects Completed</span>
                </div>
                <div className='stat-item'>
                  <h4>{userSummary.experience}</h4>
                  <span>Years Experience</span>
                </div>
                <div className='stat-item'>
                  <h4>{userSummary.happyClients}</h4>
                  <span>Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <Row>
              {features.map((feature, index) => (
                <Col md={6} key={index} className='mb-4'>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className='about__feature-card'
                  >
                    <div className='about__feature-card__icon'>
                      {feature.icon}
                    </div>
                    <h4 className='about__feature-card__title'>
                      {feature.title}
                    </h4>
                    <p className='about__feature-card__description'>
                      {feature.description}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
