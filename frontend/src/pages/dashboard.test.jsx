import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard'

describe('Given a dashboard component', () => {
  render(<Dashboard />);
  test('Then an Lista de grupos should be in the document', () => {
    expect(screen.getByText('Lista de grupos')).toBeInTheDocument();
  });
});
