import { render, screen } from '@testing-library/react';
import NutritionistHeader from './NutritionistHeader';

describe('NutritionistHeader', () => {
  test('renders name and specialty', () => {
    render(<NutritionistHeader name="Dr. Smith" specialty="Nutrition" />);
    expect(screen.getByText('Dr. Smith')).toBeInTheDocument();
    expect(screen.getByText('Nutrition')).toBeInTheDocument();
  });

  test('does not render specialty when not provided', () => {
    render(<NutritionistHeader name="Dr. Smith" />);
    expect(screen.getByText('Dr. Smith')).toBeInTheDocument();
    expect(screen.queryByText('Nutrition')).not.toBeInTheDocument();
  });
});
