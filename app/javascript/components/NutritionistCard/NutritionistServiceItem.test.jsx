import { render, screen } from '@testing-library/react';
import NutritionistServiceItem from './NutritionistServiceItem';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, options) => `${key}${options ? JSON.stringify(options) : ''}`,
  }),
}));

describe('NutritionistServiceItem', () => {
  const mockService = {
    name: 'Consultation',
    location: 'Office',
    duration_minutes: 60,
    price: 50.0,
    distance_km: 2.5,
  };

  test('renders service details', () => {
    render(<NutritionistServiceItem svc={mockService} />);
    expect(screen.getByText('Consultation')).toBeInTheDocument();
    expect(screen.getByText('Office')).toBeInTheDocument();
    expect(screen.getByText('60 nutritionist.min')).toBeInTheDocument();
    expect(screen.getByText('€ 50.00')).toBeInTheDocument();
  });

  test('renders distance when available', () => {
    render(<NutritionistServiceItem svc={mockService} />);
    expect(
      screen.getByText('📍 nutritionist.km_away{"distance":2.5}')
    ).toBeInTheDocument();
  });

  test('does not render distance when null', () => {
    const serviceWithoutDistance = { ...mockService, distance_km: null };
    render(<NutritionistServiceItem svc={serviceWithoutDistance} />);
    expect(screen.queryByText(/km_away/)).not.toBeInTheDocument();
  });
});
