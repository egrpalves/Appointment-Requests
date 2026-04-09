import { render, screen, fireEvent } from '@testing-library/react';
import NutritionistCard from './NutritionistCard';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, // Return key as translation for testing
  }),
}));

// Mock child components
jest.mock('./NutritionistAvatar', () => {
  return function MockNutritionistAvatar() {
    return <div data-testid="avatar">Avatar</div>;
  };
});

jest.mock('./NutritionistHeader', () => {
  return function MockNutritionistHeader() {
    return <div data-testid="header">Header</div>;
  };
});

jest.mock('./NutritionistBio', () => {
  return function MockNutritionistBio() {
    return <div data-testid="bio">Bio</div>;
  };
});

jest.mock('./NutritionistServices', () => {
  return function MockNutritionistServices() {
    return <div data-testid="services">Services</div>;
  };
});

jest.mock('../Button', () => {
  return function MockButton({ label, onClick, isDisabled }) {
    return (
      <button
        onClick={onClick}
        data-testid={`button-${label}`}
        disabled={isDisabled}
      >
        {label}
      </button>
    );
  };
});

describe('NutritionistCard', () => {
  const mockNutritionist = {
    id: 1,
    name: 'Dr. Smith',
    specialty: 'Nutrition',
    photo_url: 'photo.jpg',
    bio: 'Test bio',
    services: [{ id: 1, name: 'Service 1' }],
  };
  const mockOnSchedule = jest.fn();

  beforeEach(() => {
    mockOnSchedule.mockClear();
  });

  test('renders all components', () => {
    render(
      <NutritionistCard
        nutritionist={mockNutritionist}
        onSchedule={mockOnSchedule}
      />
    );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('bio')).toBeInTheDocument();
    expect(screen.getByTestId('services')).toBeInTheDocument();
  });

  test('renders schedule button', () => {
    render(
      <NutritionistCard
        nutritionist={mockNutritionist}
        onSchedule={mockOnSchedule}
      />
    );
    expect(
      screen.getByTestId('button-nutritionist.schedule_button')
    ).toBeInTheDocument();
  });

  test('calls onSchedule when schedule button is clicked', () => {
    render(
      <NutritionistCard
        nutritionist={mockNutritionist}
        onSchedule={mockOnSchedule}
      />
    );
    fireEvent.click(screen.getByTestId('button-nutritionist.schedule_button'));
    expect(mockOnSchedule).toHaveBeenCalledWith(mockNutritionist);
  });

  test('renders website button as disabled', () => {
    render(
      <NutritionistCard
        nutritionist={mockNutritionist}
        onSchedule={mockOnSchedule}
      />
    );
    const websiteButton = screen.getByTestId(
      'button-nutritionist.website_button'
    );
    expect(websiteButton.disabled).toBe(true);
  });
});
