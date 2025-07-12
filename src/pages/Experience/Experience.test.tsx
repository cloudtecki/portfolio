import { render, screen } from '@/utils/test-utils';
import Experience from './Experience';
import { mockProfileState } from '@/test/handlers/profile';

vi.mock('@/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({
    elementRef: { current: null },
    isVisible: true,
  }),
}));

describe('Experience Component', () => {
  beforeEach(() => {
    render(<Experience />, mockProfileState);
  });

  it('renders section title and subtitle', () => {
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
    expect(
      screen.getByText('My professional journey and key achievements')
    ).toBeInTheDocument();
  });

  it('Renders all experiences', () => {
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('LTIMindtree')).toBeInTheDocument();
  });
});
