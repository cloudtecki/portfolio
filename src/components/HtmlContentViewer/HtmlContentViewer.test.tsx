import '@testing-library/jest-dom';
import { render, screen } from '@/utils/test-utils';
import HtmlContentViewer from './HtmlContentViewer';

describe('Input', async () => {
  it('should render the input', () => {
    render(<HtmlContentViewer html='<p>Hello World</p>' />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
