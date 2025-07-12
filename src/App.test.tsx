import App from './App';
import { render, screen } from '@/utils/test-utils';

beforeAll(() => {
  // Mock IntersectionObserver
  class IntersectionObserverMock {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-ignore
  global.IntersectionObserver = IntersectionObserverMock;

  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: query.includes('dark'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
});

describe('App component test cases', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('Renders main sections', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'About Me' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Skills & Expertise' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Work Experience' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Completed Projects' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Featured Projects' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Get In Touch' })
    ).toBeInTheDocument();
  });
});
