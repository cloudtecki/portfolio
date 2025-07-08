import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useAppSelector, RootState } from 'core/store';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import './Experience.scss';

const Experience: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const userProfile = useAppSelector(
    (state: RootState) => state.user.profile.main.data
  );

  const { experience: experiences } = userProfile;

  return (
    <section
      id='experience'
      ref={elementRef}
      className='experience section-padding'
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='experience__section text-center mb-5'
        >
          <h2 className='experience__section--title'>Work Experience</h2>
          <p className='experience__section--subtitle'>
            My professional journey and key achievements
          </p>
        </motion.div>

        <Row className='justify-content-center'>
          <Col lg={10}>
            <div className='experience__timeline timeline'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`experience__timeline-item timeline-item ${
                    index % 2 === 0
                      ? 'experience__timeline-item--left'
                      : 'experience__timeline-item--right'
                  }`}
                >
                  <div className='experience__timeline-content'>
                    <div className='experience__timeline-header'>
                      <h3 className='experience__timeline-title'>
                        {exp.designation}
                      </h3>
                      <h4 className='experience__timeline-company'>
                        {exp.company}
                      </h4>
                      <div className='experience__timeline-meta'>
                        <span className='experience__timeline-period'>
                          <Calendar size={16} />
                          {`${exp.startDate} - ${exp.endDate}`}
                        </span>
                        <span className='experience__timeline-location'>
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className='experience__timeline-description'>
                      {exp.responsibilities}
                    </p>
                    <ul className='experience__timeline-achievements'>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='experience__timeline-marker'></div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
