import { render, screen } from '@testing-library/react';
import About from './about.js';

test('Renders about page text', () => {
  render(<About />);
  const linkElement = screen.getByText(/This is a project inspired by the layout of some poems in 'Just Us' by Claudia Rankine./);
  expect(linkElement).toBeInTheDocument();
})