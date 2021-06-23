import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text input', () => {
  render(<App />);
  const textElement = screen.getByText(/text input/i);
  expect(textElement).toBeInTheDocument();
});