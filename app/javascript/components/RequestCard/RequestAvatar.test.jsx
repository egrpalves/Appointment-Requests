import { render, screen } from '@testing-library/react';
import RequestAvatar from './RequestAvatar';

describe('RequestAvatar', () => {
  test('renders first letter of guest name', () => {
    render(<RequestAvatar guestName="John Doe" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });
});
