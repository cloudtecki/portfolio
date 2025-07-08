import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useAppSelector, RootState } from 'core/store';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import './Skills.scss';

const Skills: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const userProfile = useAppSelector(
    (state: RootState) => state.user.profile.main.data
  );

  const { skillCategories } = userProfile;

  return (
    <section id='skills' ref={elementRef} className='skills section-padding'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='skills__header text-center mb-5'
        >
          <h2 className='skills__title'>Skills & Expertise</h2>
          <p className='skills__subtitle'>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <Row>
          {skillCategories.map((category, categoryIndex) => (
            <Col lg={4} md={6} key={category.title} className='mb-4'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className='skills__category'
              >
                <h3 className='skills__category-title'>{category.title}</h3>
                <div className='skills__list'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className='skills__item'
                    >
                      <div className='skills__item-header'>
                        <span className='skills__item-name'>{skill.name}</span>
                        <span className='skills__item-percentage'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='skills__bar'>
                        <motion.div
                          className='skills__progress'
                          initial={{ width: 0 }}
                          animate={
                            isVisible ? { width: `${skill.level}%` } : {}
                          }
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
