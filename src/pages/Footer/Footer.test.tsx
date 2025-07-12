import { render, screen, fireEvent } from '@/utils/test-utils';
import { mockProfileState } from '@/test/handlers/profile';
import Footer from './Footer';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

vi.mock('lucide-react', () => ({
  Github: (props: any) => <svg data-testid='github-icon' {...props} />,
  Linkedin: (props: any) => <svg data-testid='linkedin-icon' {...props} />,
  Mail: (props: any) => <svg data-testid='mail-icon' {...props} />,
  Heart: (props: any) => <svg data-testid='heart-icon' {...props} />,
}));

describe('Footer component test case', () => {
  beforeEach(() => {
    render(<Footer />, mockProfileState);
  });
  it('Renders brand initials and description', () => {
    expect(screen.getByText('KS')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Building digital experiences with passion and precision/i
      )
    ).toBeInTheDocument();
  });

  it('Renders social links with correct hrefs and icons', () => {
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    const mailLink = screen.getByRole('link', { name: /Email/i });

    expect(githubLink).toHaveAttribute('href', 'https://github.com/cloudtecki');
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/karthick-s-8732b379'
    );
    expect(mailLink).toHaveAttribute(
      'href',
      'mailto:karthick.sprp18@gmail.com'
    );

    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
  });

  it('Renders copyright with current year, name, and heart icon', () => {
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${year} Karthick S. Made with`, 'i'))
    ).toBeInTheDocument();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('Scrolls to top when brand initials are clicked', () => {
    const scrollToMock = vi
      .spyOn(window, 'scrollTo')
      .mockImplementation(() => {});

    fireEvent.click(screen.getByText('KS'));
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToMock.mockRestore();
  });

  it('Renders divider', () => {
    expect(document.querySelector('.footer__divider')).toBeInTheDocument();
  });
});
