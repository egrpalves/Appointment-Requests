import { render, screen } from '@testing-library/react';
import DashboardApp from './DashboardApp';

// Mock all hooks and components
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

jest.mock('../../hooks/useNutritionistList', () => ({
  useNutritionistList: () => ({
    nutritionists: [{ id: 1, name: 'Dr. Smith' }],
    selectedId: 1,
    setSelectedId: jest.fn(),
  }),
}));

jest.mock('../../hooks/useAppointmentRequests', () => ({
  useAppointmentRequests: () => ({
    requests: [],
    loading: false,
    actionError: null,
    handleAction: jest.fn(),
  }),
}));

jest.mock('../AppHeader', () => {
  return function MockAppHeader() {
    return <div data-testid="app-header">App Header</div>;
  };
});

jest.mock('./NutritionistSelector', () => {
  return function MockNutritionistSelector() {
    return <div data-testid="nutritionist-selector">Nutritionist Selector</div>;
  };
});

jest.mock('./RequestList', () => {
  return function MockRequestList() {
    return <div data-testid="request-list">Request List</div>;
  };
});

describe('DashboardApp', () => {
  test('renders main components', () => {
    render(<DashboardApp />);
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('nutritionist-selector')).toBeInTheDocument();
    expect(screen.getByTestId('request-list')).toBeInTheDocument();
  });
});
