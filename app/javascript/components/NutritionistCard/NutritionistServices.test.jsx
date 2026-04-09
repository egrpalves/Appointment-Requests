import { render, screen, fireEvent } from '@testing-library/react';
import NutritionistServices from './NutritionistServices';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, options) => `${key}${options ? JSON.stringify(options) : ''}`,
  }),
}));

// Mock NutritionistServiceItem
jest.mock('./NutritionistServiceItem', () => {
  return function MockNutritionistServiceItem({ svc }) {
    return <div data-testid={`service-${svc.id}`}>Service {svc.id}</div>;
  };
});

describe('NutritionistServices', () => {
  const mockServices = [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' },
  ];

  test('renders first 2 services by default', () => {
    render(<NutritionistServices services={mockServices} />);
    expect(screen.getByTestId('service-1')).toBeInTheDocument();
    expect(screen.getByTestId('service-2')).toBeInTheDocument();
    expect(screen.queryByTestId('service-3')).not.toBeInTheDocument();
  });

  test('shows expand button when more than 2 services', () => {
    render(<NutritionistServices services={mockServices} />);
    expect(
      screen.getByText(/nutritionist.more_services_one/)
    ).toBeInTheDocument();
  });

  test('expands to show all services when clicked', () => {
    render(<NutritionistServices services={mockServices} />);
    fireEvent.click(screen.getByText(/nutritionist.more_services_one/));
    expect(screen.getByTestId('service-3')).toBeInTheDocument();
    expect(screen.getByText('nutritionist.show_less')).toBeInTheDocument();
  });

  test('does not show expand button when 2 or fewer services', () => {
    render(<NutritionistServices services={mockServices.slice(0, 2)} />);
    expect(
      screen.queryByText(/nutritionist.more_services/)
    ).not.toBeInTheDocument();
  });
});
