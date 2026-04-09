import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  test('does not render when total_pages <= 1', () => {
    const { container } = render(
      <Pagination
        meta={{ page: 1, total_pages: 1 }}
        onPageChange={mockOnPageChange}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  test('renders page buttons', () => {
    render(
      <Pagination
        meta={{ page: 1, total_pages: 3 }}
        onPageChange={mockOnPageChange}
      />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('highlights current page', () => {
    render(
      <Pagination
        meta={{ page: 2, total_pages: 3 }}
        onPageChange={mockOnPageChange}
      />
    );
    const currentPageButton = screen.getByText('2');
    expect(currentPageButton).toHaveClass('bg-button-secondary');
  });

  test('calls onPageChange when page button is clicked', () => {
    render(
      <Pagination
        meta={{ page: 1, total_pages: 3 }}
        onPageChange={mockOnPageChange}
      />
    );
    fireEvent.click(screen.getByText('2'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('disables previous button on first page', () => {
    render(
      <Pagination
        meta={{ page: 1, total_pages: 3 }}
        onPageChange={mockOnPageChange}
      />
    );
    const prevButton = screen.getByText('‹');
    expect(prevButton).toBeDisabled();
  });

  test('disables next button on last page', () => {
    render(
      <Pagination
        meta={{ page: 3, total_pages: 3 }}
        onPageChange={mockOnPageChange}
      />
    );
    const nextButton = screen.getByText('›');
    expect(nextButton).toBeDisabled();
  });

  test('calls onPageChange with previous page', () => {
    render(
      <Pagination
        meta={{ page: 2, total_pages: 3 }}
        onPageChange={mockOnPageChange}
      />
    );
    fireEvent.click(screen.getByText('‹'));
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });

  test('calls onPageChange with next page', () => {
    render(
      <Pagination
        meta={{ page: 2, total_pages: 3 }}
        onPageChange={mockOnPageChange}
      />
    );
    fireEvent.click(screen.getByText('›'));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
});
