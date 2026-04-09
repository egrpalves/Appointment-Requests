import { render, screen, fireEvent } from '@testing-library/react';
import NutritionistSelector from './NutritionistSelector';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, // Return key as translation for testing
  }),
}));

describe('NutritionistSelector', () => {
  const mockProps = {
    nutritionists: [
      { id: 1, name: 'Dr. Smith', specialty: 'Nutrition' },
      { id: 2, name: 'Dr. Jones', specialty: 'Dietetics' },
    ],
    selectedId: 1,
    statusFilter: 'pending',
    onSelect: jest.fn(),
    onFilterChange: jest.fn(),
  };

  beforeEach(() => {
    mockProps.onSelect.mockClear();
    mockProps.onFilterChange.mockClear();
  });

  test('renders nutritionist select', () => {
    render(<NutritionistSelector {...mockProps} />);
    expect(screen.getByText('dashboard.viewing_as')).toBeInTheDocument();
    expect(
      screen.getByDisplayValue('Dr. Smith – Nutrition')
    ).toBeInTheDocument();
  });

  test('calls onSelect when nutritionist is changed', () => {
    render(<NutritionistSelector {...mockProps} />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '2' } });
    expect(mockProps.onSelect).toHaveBeenCalledWith(2);
  });

  test('renders filter buttons', () => {
    render(<NutritionistSelector {...mockProps} />);
    expect(screen.getByText('dashboard.filters.pending')).toBeInTheDocument();
    expect(screen.getByText('dashboard.filters.accepted')).toBeInTheDocument();
    expect(screen.getByText('dashboard.filters.rejected')).toBeInTheDocument();
  });

  test('calls onFilterChange when filter button is clicked', () => {
    render(<NutritionistSelector {...mockProps} />);
    fireEvent.click(screen.getByText('dashboard.filters.accepted'));
    expect(mockProps.onFilterChange).toHaveBeenCalledWith('accepted');
  });

  test('highlights active filter', () => {
    render(<NutritionistSelector {...mockProps} />);
    const activeButton = screen.getByText('dashboard.filters.pending');
    expect(activeButton).toHaveClass('bg-white', 'text-brand-600');
  });
});
