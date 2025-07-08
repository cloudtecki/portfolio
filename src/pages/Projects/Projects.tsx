import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { RootState, useAppSelector } from 'core/store';
import ProjectModal from '@/components/ProjectModal/ProjectModal';

import './Projects.scss';
import { IProject } from 'core/base/type';

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [isShow, setShow] = useState<boolean>(false);
  const [selectedProject, setSelectedPRoject] = useState<IProject | null>(null);
  const userProfile = useAppSelector(
    (state: RootState) => state.user.profile.main.data
  );

  const { projects } = userProfile;

  const handleClose = () => {
    setShow(false);
  };

  const handleSelectProject = (project: IProject) => {
    console.log(project);
    setSelectedPRoject(project);
    setShow(true);
  };

  return (
    <section
      id='projects'
      ref={elementRef}
      className='projects section-padding'
    >
      <ProjectModal
        show={isShow}
        onHide={handleClose}
        project={selectedProject}
      />
      <Container>
        {/* Completed Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='projects__header text-center mb-5'
        >
          <h2 className='projects__title'>Completed Projects</h2>
          <p className='projects__subtitle'>
            A showcase of my completed work and side projects
          </p>
        </motion.div>
        <Row>
          {projects
            .filter((project) => !project.isFeatured)
            .map((project, index) => (
              <Col lg={4} md={6} key={project.id} className='mb-4'>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`projects__card ${
                    project.isFeatured ? ' projects__card--featured' : ''
                  }`}
                  onClick={() => handleSelectProject(project)}
                >
                  <div className='projects__image'>
                    <img src={project.image} alt={project.title} />
                    <div className='projects__overlay'>
                      <div className='projects__links'>
                        {project.github && (
                          <a
                            className='projects__link'
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            className='projects__link'
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='projects__content'>
                    <h3 className='projects__project-title'>{project.title}</h3>
                    <p className='projects__description'>
                      {project.description}
                    </p>
                    <div className='projects__technologies'>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className='projects__tech-tag'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
        </Row>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='projects__header text-center mb-5 mt-5'
        >
          <h2 className='projects__title'>Featured Projects</h2>
          <p className='projects__subtitle'>
            Highlighted projects with advanced features and design
          </p>
        </motion.div>
        <Row>
          {projects
            .filter((project) => project.isFeatured)
            .map((project, index) => (
              <Col lg={6} md={6} key={index} className='mb-4'>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='projects__card projects__card--featured'
                >
                  <div className='projects__image'>
                    <img src={project?.image} alt={project.title} />
                    <div className='projects__overlay'>
                      <div className='projects__links'>
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='projects__link'
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='projects__link'
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='projects__content'>
                    <h3 className='projects__project-title'>{project.title}</h3>
                    <p className='projects__description'>
                      {project.description}
                    </p>
                    <div className='projects__technologies'>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className='projects__tech-tag'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
