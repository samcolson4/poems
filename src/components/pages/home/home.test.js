import { render, screen } from '@testing-library/react';
import Home from './home.js';

// test('this is a passing test', () => {
//   render(<Home />);
//   const linkElement = screen.getByText(/Home text/);
//   expect(linkElement).toBeInTheDocument();
// })

test('this is a passing test', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Poems./);
  expect(linkElement).toBeInTheDocument();
})
