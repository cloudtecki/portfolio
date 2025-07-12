import { render, screen, fireEvent } from '@/utils/test-utils';
import Contact from './Contact';
import { mockProfileState } from '@/test/handlers/profile';

// Mock hooks
vi.mock('@/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({
    elementRef: { current: null },
    isVisible: true,
  }),
}));
vi.mock('@/hooks/useParallax', () => ({
  useParallax: () => 0,
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Mail: (props: any) => <svg data-testid='icon-mail' {...props} />,
  Phone: (props: any) => <svg data-testid='icon-phone' {...props} />,
  MapPin: (props: any) => <svg data-testid='icon-mappin' {...props} />,
  Send: (props: any) => <svg data-testid='icon-send' {...props} />,
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: (props: any) => <div {...props} />,
    a: (props: any) => <a {...props} />,
  },
}));

describe('Contact Component test case', () => {
  beforeEach(() => {
    render(<Contact />, mockProfileState);
  });

  it('Renders section title and subtitle', () => {
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(
      screen.getByText("Let's discuss your next project or just say hello")
    ).toBeInTheDocument();
  });

  it('Renders contact information', () => {
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Phone' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Location' })
    ).toBeInTheDocument();
    expect(screen.getByText('karthick.sprp@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('9360390426')).toBeInTheDocument();
    expect(screen.getByText('Chennai, India')).toBeInTheDocument();
  });

  it('Renders form fields', () => {
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('Updates form fields on change', async () => {
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    await fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    expect(nameInput).toHaveValue('Jane Doe');

    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    await fireEvent.change(emailInput, {
      target: { value: 'jane@example.com' },
    });
    expect(emailInput).toHaveValue('jane@example.com');
  });

  it('Submits the form', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    fireEvent.change(screen.getByRole('textbox', { name: 'Name' }), {
      target: { value: 'Jane Doe' },
    });

    fireEvent.change(screen.getByRole('textbox', { name: 'Email' }), {
      target: { value: 'jane@example.com' },
    });

    fireEvent.change(screen.getByRole('textbox', { name: 'Subject' }), {
      target: { value: 'Hello' },
    });

    fireEvent.change(screen.getByRole('textbox', { name: 'Message' }), {
      target: { value: 'This is a test message.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(logSpy).toHaveBeenCalledWith('Form submitted:', {
      name: 'Jane Doe',
      email: 'jane@example.com',
      subject: 'Hello',
      message: 'This is a test message.',
    });
    logSpy.mockRestore();
  });

  it('Renders icons for contact info', () => {
    expect(screen.getByTestId('icon-mail')).toBeInTheDocument();
    expect(screen.getByTestId('icon-phone')).toBeInTheDocument();
    expect(screen.getByTestId('icon-mappin')).toBeInTheDocument();
  });
});
