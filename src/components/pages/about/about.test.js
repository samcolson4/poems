import { render, screen } from '@testing-library/react';
import About from './about.js';

test('this is a passing test', () => {
  render(<About />);
  const linkElement = screen.getByText(/This is the about page/);
  expect(linkElement).toBeInTheDocument();
})