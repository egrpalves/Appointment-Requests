import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('SearchBar', () => {
  const mockProps = {
    query: 'nutritionist',
    location: 'New York',
    onQueryChange: jest.fn(),
    onLocationChange: jest.fn(),
    onSearch: jest.fn(),
    onLocate: jest.fn(),
  };

  beforeEach(() => {
    Object.values(mockProps).forEach(
      (mock) => mock.mockClear && mock.mockClear()
    );
  });

  test('renders inputs with values', () => {
    render(<SearchBar {...mockProps} />);
    expect(screen.getByDisplayValue('nutritionist')).toBeInTheDocument();
    expect(screen.getByDisplayValue('New York')).toBeInTheDocument();
  });

  test('calls onQueryChange when query input changes', () => {
    render(<SearchBar {...mockProps} />);
    const queryInput = screen.getByDisplayValue('nutritionist');
    fireEvent.change(queryInput, { target: { value: 'dietitian' } });
    expect(mockProps.onQueryChange).toHaveBeenCalledWith('dietitian');
  });

  test('calls onLocationChange when location input changes', () => {
    render(<SearchBar {...mockProps} />);
    const locationInput = screen.getByDisplayValue('New York');
    fireEvent.change(locationInput, { target: { value: 'Boston' } });
    expect(mockProps.onLocationChange).toHaveBeenCalledWith('Boston');
  });

  test('calls onLocate when locate button is clicked', () => {
    render(<SearchBar {...mockProps} />);
    const locateButton = screen.getByTitle('Use my location');
    fireEvent.click(locateButton);
    expect(mockProps.onLocate).toHaveBeenCalledTimes(1);
  });

  test('renders search button', () => {
    render(<SearchBar {...mockProps} />);
    expect(screen.getByText('search.button')).toBeInTheDocument();
  });
});
