import React from 'react';
import { render, screen } from '@/utils/test-utils';
import About from './About';
import { mockProfileState } from '@/test/handlers/profile';

vi.mock('@/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({
    elementRef: { current: null },
    isVisible: true,
  }),
}));

describe('About Page test case', () => {
  it('Renders About page content', () => {
    render(<About />, mockProfileState);

    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
