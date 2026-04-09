import { render, screen, fireEvent } from '@testing-library/react';
import ModalHeader from './ModalHeader';

describe('ModalHeader', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('renders title and close button', () => {
    render(<ModalHeader title="Test Title" onClose={mockOnClose} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders subtitle when provided', () => {
    render(
      <ModalHeader
        title="Test Title"
        subtitle="Test Subtitle"
        onClose={mockOnClose}
      />
    );
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('does not render subtitle when not provided', () => {
    render(<ModalHeader title="Test Title" onClose={mockOnClose} />);
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(<ModalHeader title="Test Title" onClose={mockOnClose} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
