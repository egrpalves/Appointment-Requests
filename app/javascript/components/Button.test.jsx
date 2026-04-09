import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders with label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies primary style', () => {
    render(<Button label="Primary" style="primary" />);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-button-primary');
  });

  test('applies secondary style', () => {
    render(<Button label="Secondary" style="secondary" />);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('bg-button-secondary');
  });

  test('applies outline style', () => {
    render(<Button label="Outline" style="outline" />);
    const button = screen.getByText('Outline');
    expect(button).toHaveClass('border');
  });

  test('is disabled when isDisabled is true', () => {
    render(<Button label="Disabled" isDisabled={true} />);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  test('applies custom class', () => {
    render(<Button label="Custom" customClass="custom-class" />);
    const button = screen.getByText('Custom');
    expect(button).toHaveClass('custom-class');
  });

  test('has title attribute', () => {
    render(<Button label="Titled" title="Button title" />);
    const button = screen.getByTitle('Button title');
    expect(button).toBeInTheDocument();
  });
});
