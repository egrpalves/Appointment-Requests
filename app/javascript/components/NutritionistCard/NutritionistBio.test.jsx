import { render, screen } from '@testing-library/react';
import NutritionistBio from './NutritionistBio';

describe('NutritionistBio', () => {
  test('renders bio text', () => {
    render(<NutritionistBio bio="Test bio content" />);
    expect(screen.getByText('Test bio content')).toBeInTheDocument();
  });
});
