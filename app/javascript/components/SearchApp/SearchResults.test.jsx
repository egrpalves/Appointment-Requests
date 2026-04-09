import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, options) => `${key}${options ? JSON.stringify(options) : ''}`,
  }),
}));

// Mock child components
jest.mock('../NutritionistCard/NutritionistCard', () => {
  return function MockNutritionistCard({ nutritionist }) {
    return (
      <div data-testid={`nutritionist-${nutritionist.id}`}>
        Nutritionist {nutritionist.id}
      </div>
    );
  };
});

jest.mock('../Pagination', () => {
  return function MockPagination() {
    return <div data-testid="pagination">Pagination</div>;
  };
});

describe('SearchResults', () => {
  const mockProps = {
    nutritionists: [
      { id: 1, name: 'Dr. Smith' },
      { id: 2, name: 'Dr. Jones' },
    ],
    meta: { total: 5, page: 1, total_pages: 3 },
    loading: false,
    error: null,
    userCoords: null,
    onSchedule: jest.fn(),
    onPageChange: jest.fn(),
  };

  test('shows loading spinner when loading', () => {
    render(<SearchResults {...mockProps} loading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('shows error message when error', () => {
    render(<SearchResults {...mockProps} error="Test error" />);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  test('renders nutritionist cards and pagination', () => {
    render(<SearchResults {...mockProps} />);
    expect(screen.getByTestId('nutritionist-1')).toBeInTheDocument();
    expect(screen.getByTestId('nutritionist-2')).toBeInTheDocument();
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  test('shows results count', () => {
    render(<SearchResults {...mockProps} />);
    expect(
      screen.getByText('search.results_count_other{"shown":2,"total":5}')
    ).toBeInTheDocument();
  });

  test('shows no results message when total is 0', () => {
    const propsNoResults = {
      ...mockProps,
      nutritionists: [],
      meta: { total: 0 },
    };
    render(<SearchResults {...propsNoResults} />);
    expect(screen.getByText('search.no_results')).toBeInTheDocument();
  });
});
