import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  test('renders logo image', () => {
    render(<Logo />);
    const logo = screen.getByAltText('Nutrium');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.png');
  });

  test('renders as a link to home', () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  test('has correct styling classes', () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('flex', 'items-center', 'gap-2', 'group');
  });
});
