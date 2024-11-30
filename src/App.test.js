import { render, screen } from '@testing-library/react';
import App from './App';

test('renders devil field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Devil: /i);
  expect(linkElement).toBeInTheDocument();
});
