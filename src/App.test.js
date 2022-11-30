import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/a11y workshop/i);
  expect(linkElement).toBeInTheDocument();
});
