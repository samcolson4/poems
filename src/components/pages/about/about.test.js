import { render, screen } from '@testing-library/react';
import About from './about.js';

test('Renders about page text', () => {
  render(<About />);
  const linkElement = screen.getByText(/Claudia Rankine/);
  expect(linkElement).toBeInTheDocument();
})