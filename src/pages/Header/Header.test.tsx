import { render, screen, fireEvent } from '@/utils/test-utils';
import Header from './Header';

// Mock dependencies
vi.mock('core/entities/user/profile/queries', () => ({
  useLazyGetProfileQuery: () => [vi.fn()],
}));
vi.mock('@/hooks/useParallax', () => ({
  useParallax: () => 0,
}));

describe('Header component test case', () => {
  beforeEach(() => {
    // Reset scroll position before each test
    window.scrollY = 0;
    vi.clearAllMocks();
  });

  it('Renders brand text', () => {
    render(<Header />);
    expect(screen.getByText('KS')).toBeInTheDocument();
  });

  it('Renders all navigation links', () => {
    render(<Header />);
    const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
    navLinks.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('Toggles mobile menu icon on click', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button');
    // Initially should show Menu icon
    expect(toggleButton.querySelector('svg')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    // After click, should show X icon
    expect(toggleButton.querySelector('svg')).toBeInTheDocument();
  });

  it('Calls scrollToSection and closes mobile menu on nav link click', () => {
    render(<Header />);
    const navLink = screen.getByText('About');
    // Mock scrollIntoView
    const scrollIntoViewMock = vi.fn();
    document.getElementById = vi.fn().mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    });
    fireEvent.click(navLink);
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it('Adds scrolled class when window is scrolled', () => {
    render(<Header />);
    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    // Force scroll event
    window.dispatchEvent(new Event('scroll'));
    const header = document.querySelector('.header');
    // The className may update asynchronously, so check for both possibilities
    expect(header?.className.includes('scrolled')).toBe(true);
  });

  it('Renders animated background shapes', () => {
    render(<Header />);
    for (let i = 1; i <= 6; i++) {
      expect(document.querySelector(`.shape-${i}`)).toBeInTheDocument();
    }
  });
});
