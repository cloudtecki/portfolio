import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectModal from './ProjectModal';
import { IProject } from 'core/base/type';

const mockProject: IProject = {
  title: 'Test Project',
  domain: 'Web Development',
  image: 'test-image.jpg',
  isFeatured: true,
  startDate: new Date('2022-01-01'),
  endDate: new Date('2022-12-31'),
  teamSize: 5,
  role: 'Frontend Developer',
  description: 'A test project description.',
  responsibilities: ['Develop UI', 'Write tests'],
  technologies: ['React', 'TypeScript'],
  tools: ['Figma', 'Jira'],
  github: 'https://github.com/test/project',
  demo: 'https://demo.com',
  id: '1',
};

describe('ProjectModal component test cases', () => {
  it('Renders nothing if project is null', () => {
    const { container } = render(
      <ProjectModal show={true} onHide={vi.fn()} project={null} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('Renders modal with project details', () => {
    render(<ProjectModal show={true} onHide={vi.fn()} project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('01-01-2022 -31-12-2022')).toBeInTheDocument();
    expect(screen.getByText('5 members')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('A test project description.')).toBeInTheDocument();
    expect(screen.getByText('Develop UI')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Figma')).toBeInTheDocument();
    expect(screen.getByText('Jira')).toBeInTheDocument();
    expect(screen.getByText('View Code')).toBeInTheDocument();
    expect(screen.getByText('Live Demo')).toBeInTheDocument();
  });

  it('Calls onHide when close button is clicked', () => {
    const onHide = vi.fn();
    render(<ProjectModal show={true} onHide={onHide} project={mockProject} />);

    const closeButton = screen.getByRole('button', { name: '' });
    fireEvent.click(closeButton);
    expect(onHide).toHaveBeenCalled();
  });

  it('Does not render github or demo buttons if not provided', () => {
    const project = { ...mockProject, github: '', demo: '' };
    render(<ProjectModal show={true} onHide={vi.fn()} project={project} />);

    expect(screen.queryByText('View Code')).not.toBeInTheDocument();
    expect(screen.queryByText('Live Demo')).not.toBeInTheDocument();
  });

  it('Renders correctly when isFeatured is false', () => {
    const project = { ...mockProject, isFeatured: false };
    render(<ProjectModal show={true} onHide={vi.fn()} project={project} />);

    expect(screen.queryByText('Featured')).not.toBeInTheDocument();
  });

  it('Renders with empty responsibilities, technologies, and tools', () => {
    const project = {
      ...mockProject,
      responsibilities: [],
      technologies: [],
      tools: [],
    };
    render(<ProjectModal show={true} onHide={vi.fn()} project={project} />);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('Formats date strings in DD-MM-YYYY format', () => {
    const updatedProject = {
      ...mockProject,
      startDate: '01-01-2022',
      endDate: '31-12-2022',
    };
    render(
      <ProjectModal show={true} onHide={vi.fn()} project={updatedProject} />
    );

    expect(screen.getByText('01-01-2022 -31-12-2022')).toBeInTheDocument();
  });

  it('Formats date strings in different format YYYY-MM-DD format', () => {
    const updatedProject = {
      ...mockProject,
      startDate: '2022-01-01',
      endDate: '2022-12-31',
    };
    render(
      <ProjectModal show={true} onHide={vi.fn()} project={updatedProject} />
    );

    expect(screen.getByText('01-01-2022 -31-12-2022')).toBeInTheDocument();
  });

  it('Formats date strings in different format YYYY-MM-DD format', () => {
    const updatedProject = {
      ...mockProject,
      startDate: '2022-01-01',
      endDate: '2022-12-31',
    };
    render(
      <ProjectModal show={true} onHide={vi.fn()} project={updatedProject} />
    );

    expect(screen.getByText('01-01-2022 -31-12-2022')).toBeInTheDocument();
  });
});
