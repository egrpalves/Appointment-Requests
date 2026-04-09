import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

// Mock the child components
jest.mock('./LanguageSelector', () => {
  return function MockLanguageSelector() {
    return <div data-testid="language-selector">Language Selector</div>;
  };
});

jest.mock('./Logo', () => {
  return function MockLogo() {
    return <div data-testid="logo">Logo</div>;
  };
});

describe('AppHeader', () => {
  test('renders with link', () => {
    render(<AppHeader linkHref="/dashboard" linkLabel="Dashboard" />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  test('link has correct href', () => {
    render(<AppHeader linkHref="/dashboard" linkLabel="Dashboard" />);
    const link = screen.getByText('Dashboard');
    expect(link).toHaveAttribute('href', '/dashboard');
  });

  test('renders logo and language selector', () => {
    render(<AppHeader linkHref="/dashboard" linkLabel="Dashboard" />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('language-selector')).toBeInTheDocument();
  });

  test('has correct header styling', () => {
    render(<AppHeader linkHref="/dashboard" linkLabel="Dashboard" />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass(
      'bg-brand-500',
      'sticky',
      'top-0',
      'z-40',
      'shadow-sm'
    );
  });
});
