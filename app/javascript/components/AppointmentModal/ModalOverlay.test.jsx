import { render, screen, fireEvent } from '@testing-library/react';
import ModalOverlay from './ModalOverlay';

describe('ModalOverlay', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('renders children', () => {
    render(
      <ModalOverlay onClose={mockOnClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('calls onClose when overlay is clicked', () => {
    render(
      <ModalOverlay onClose={mockOnClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );
    const overlay = screen.getByText('Test Content').parentElement;
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when child is clicked', () => {
    render(
      <ModalOverlay onClose={mockOnClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );
    fireEvent.click(screen.getByText('Test Content'));
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test('calls onClose on Escape key press', () => {
    render(
      <ModalOverlay onClose={mockOnClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose on other key press', () => {
    render(
      <ModalOverlay onClose={mockOnClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );
    fireEvent.keyDown(document, { key: 'Enter' });
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
