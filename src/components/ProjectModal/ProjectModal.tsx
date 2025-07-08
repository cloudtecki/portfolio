import React from 'react';
import { Modal, Badge, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Users,
  Briefcase,
  Globe,
  Github,
  ExternalLink,
  X,
  Clock,
  MapPin,
} from 'lucide-react';
import { IProject } from 'core/base/type';

import './ProjectModal.scss';

interface ProjectModalProps {
  show: boolean;
  onHide: () => void;
  project: IProject | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  show,
  onHide,
  project,
}) => {
  if (!project) return null;

  const formatDate = (date: string | Date) => {
    let dateObj: Date;
    if (typeof date === 'string') {
      // Handles "01-01-2022" as "DD-MM-YYYY"
      if (/^\d{2}-\d{2}-\d{4}$/.test(date)) {
        const [day, month, year] = date.split('-').map(Number);
        dateObj = new Date(year, month - 1, day);
      } else {
        dateObj = new Date(date);
      }
    } else {
      dateObj = date;
    }
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getTechBadgeColor = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (
      ['react', 'javascript', 'typescript', 'html', 'css'].includes(lowerTech)
    ) {
      return 'primary';
    }
    if (['redux', 'saga', 'rtk query'].includes(lowerTech)) {
      return 'info';
    }
    if (['jest', 'react testing library'].includes(lowerTech)) {
      return 'success';
    }
    if (['.net core', 'swagger', 'azure devops'].includes(lowerTech)) {
      return 'warning';
    }
    if (['sass', 'formik'].includes(lowerTech)) {
      return 'secondary';
    }
    return 'outline-dark';
  };

  const getToolBadgeColor = (tool: string) => {
    const lowerTool = tool.toLowerCase();
    if (['figma'].includes(lowerTool)) return 'danger';
    if (['jira'].includes(lowerTool)) return 'info';
    return 'outline-primary';
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 300,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.3 },
    },
  };

  return (
    <AnimatePresence mode='wait'>
      <Modal
        show={show}
        onHide={onHide}
        size='lg'
        centered
        backdrop='static'
        className='portfolio-modal'
      >
        <motion.div
          variants={modalVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='modal-content'
        >
          <Modal.Header className='d-flex justify-content-between align-items-center'>
            <motion.div variants={contentVariants}>
              <Modal.Title className='fw-bold text-dark mb-0'>
                {project.title}
              </Modal.Title>
              <div className='d-flex align-items-center mt-2 text-muted'>
                <MapPin size={16} className='me-2' />
                <span className='small'>{project.domain}</span>
              </div>
            </motion.div>
            <Button
              variant='link'
              onClick={onHide}
              className='text-muted p-0 border-0'
            >
              <X size={24} />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <motion.div variants={contentVariants} className='p-4'>
              {/* Project Image */}
              <div className='position-relative mb-4'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-100 rounded-3'
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                {project.isFeatured && (
                  <Badge
                    bg='success'
                    className='position-absolute top-0 end-0 m-3'
                  >
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Info Grid */}
              <Row className='mb-4'>
                <Col md={6}>
                  <div className='d-flex align-items-center mb-3'>
                    <Calendar size={18} className='text-primary me-2' />
                    <div>
                      <small className='text-muted d-block'>Duration</small>
                      <span className='fw-medium'>
                        {formatDate(project.startDate)} -
                        {formatDate(project.endDate)}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='d-flex align-items-center mb-3'>
                    <Users size={18} className='text-primary me-2' />
                    <div>
                      <small className='text-muted d-block'>Team Size</small>
                      <span className='fw-medium'>
                        {project.teamSize} members
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className='d-flex align-items-center mb-3'>
                    <Briefcase size={18} className='text-primary me-2' />
                    <div>
                      <small className='text-muted d-block'>Role</small>
                      <span className='fw-medium'>{project.role}</span>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Description */}
              <div className='mb-4'>
                <h6 className='fw-bold text-dark mb-3'>Project Description</h6>
                <p
                  className='text-muted lh-lg'
                  style={{ textAlign: 'justify' }}
                >
                  {project.description}
                </p>
              </div>

              <ul className='project-responsibilities'>
                {project.responsibilities &&
                  project.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
              </ul>

              {/* Technologies */}
              <div className='mb-4'>
                <h6 className='fw-bold text-dark mb-3'>Technologies</h6>
                <div className='d-flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className='project-technologies'>
                        <span className='tech-tag'>{tech}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className='mb-4'>
                <h6 className='fw-bold text-dark mb-3'>Tools</h6>
                <div className='d-flex flex-wrap gap-2'>
                  {project.tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className='project-technologies'>
                        <span className='tech-tag'>{tool}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Modal.Body>

          <Modal.Footer>
            <motion.div
              variants={contentVariants}
              className='d-flex gap-3 w-100'
            >
              {project.github && (
                <Button
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='outline-dark'
                  className='d-flex align-items-center gap-2 flex-fill'
                >
                  <Github size={18} />
                  View Code
                </Button>
              )}
              {project.demo && (
                <Button
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='primary'
                  className='d-flex align-items-center gap-2 flex-fill'
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Button>
              )}
            </motion.div>
          </Modal.Footer>
        </motion.div>
      </Modal>
    </AnimatePresence>
  );
};

export default ProjectModal;
