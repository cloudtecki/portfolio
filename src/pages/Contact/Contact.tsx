import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useAppSelector, RootState } from 'core/store';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

import './Contact.scss';

const Contact: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const parallaxOffset = useParallax(0.3);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const userProfile = useAppSelector(
    (state: RootState) => state.user.profile.main.data
  );

  const { summary } = userProfile;

  const { email, phone, location, firstName, lastName } = summary;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: email,
      link: `mailto:${email}`,
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: phone,
      link: `tel:${phone}`,
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: location,
      link: '#',
    },
  ];

  return (
    <section id='contact' ref={elementRef} className='contact section-padding'>
      {/* Background Animation */}
      <div
        className='contact__bg-animation'
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className='contact__bg-animation__floating-shapes'>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='contact__section text-center mb-5'
        >
          <h2 className='contact__section-title'>Get In Touch</h2>
          <p className='contact__section-subtitle'>
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <Row>
          <Col lg={8} className='mb-4 mb-lg-0'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='contact__form-wrapper'
            >
              <Form onSubmit={handleSubmit} className='contact-form'>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-4' controlId='formName'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='form-control-custom'
                        placeholder='Name'
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-4' controlId='formEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='form-control-custom'
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='mb-4' controlId='formSubject'>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='form-control-custom'
                    placeholder='Subject of your message'
                  />
                </Form.Group>
                <Form.Group className='mb-4' controlId='formMessage'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={5}
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='form-control-custom'
                  />
                </Form.Group>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type='submit' className='btn-primary-custom'>
                    <Send size={18} className='me-2' />
                    Send Message
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='contact-info'
            >
              <h3 className='contact-info-title'>Contact Information</h3>
              <p className='contact-info-text'>
                I'm always interested in new opportunities and interesting
                projects. Feel free to get in touch!
              </p>

              <div className='contact-items'>
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className='contact-item'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <div className='contact-icon'>{item.icon}</div>
                    <div className='contact-details'>
                      <h4>{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
