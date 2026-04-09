import { render, screen } from '@testing-library/react';
import NutritionistAvatar from './NutritionistAvatar';

describe('NutritionistAvatar', () => {
  test('renders image with photoUrl', () => {
    render(<NutritionistAvatar photoUrl="test.jpg" name="Dr. Smith" />);
    const img = screen.getByAltText('Dr. Smith');
    expect(img).toHaveAttribute('src', 'test.jpg');
  });

  test('renders fallback avatar when no photoUrl', () => {
    render(<NutritionistAvatar name="Dr. Smith" />);
    const img = screen.getByAltText('Dr. Smith');
    expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('ui-avatars.com')
    );
  });
});
