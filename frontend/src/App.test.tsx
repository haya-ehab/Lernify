import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders instructor dashboard route', () => {
  render(
    <MemoryRouter initialEntries={['/instructor-dashboard']}>
      <App />
    </MemoryRouter>
  );
  const element = screen.getByText(/instructor dashboard/i);
  expect(element).toBeInTheDocument();
});
