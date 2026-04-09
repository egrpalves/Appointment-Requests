import { render, screen } from '@testing-library/react';
import SearchApp from './SearchApp';

// Mock all the hooks and components
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

jest.mock('../../hooks/useGeolocation', () => ({
  useGeolocation: () => ({
    userCoords: null,
    locate: jest.fn(),
  }),
}));

jest.mock('../../hooks/useNutritionistSearch', () => ({
  useNutritionistSearch: () => ({
    query: '',
    setQuery: jest.fn(),
    location: '',
    setLocation: jest.fn(),
    nutritionists: [],
    meta: { page: 1, total_pages: 1 },
    loading: false,
    error: null,
    handlePageChange: jest.fn(),
    handleSearchClick: jest.fn(),
  }),
}));

jest.mock('../AppHeader', () => {
  return function MockAppHeader() {
    return <div data-testid="app-header">App Header</div>;
  };
});

jest.mock('./SearchBar', () => {
  return function MockSearchBar() {
    return <div data-testid="search-bar">Search Bar</div>;
  };
});

jest.mock('./SearchResults', () => {
  return function MockSearchResults() {
    return <div data-testid="search-results">Search Results</div>;
  };
});

jest.mock('../AppointmentModal/AppointmentModal', () => {
  return function MockAppointmentModal() {
    return <div data-testid="appointment-modal">Appointment Modal</div>;
  };
});

describe('SearchApp', () => {
  test('renders main components', () => {
    render(<SearchApp />);
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('search-results')).toBeInTheDocument();
  });

  test('does not render modal initially', () => {
    render(<SearchApp />);
    expect(screen.queryByTestId('appointment-modal')).not.toBeInTheDocument();
  });
});
