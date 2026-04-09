import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentSuccess from './AppointmentSuccess';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, // Return key as translation for testing
  }),
}));

describe('AppointmentSuccess', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test('renders success message', () => {
    render(<AppointmentSuccess onClose={mockOnClose} />);
    expect(
      screen.getByText('appointment_modal.success_title')
    ).toBeInTheDocument();
    expect(
      screen.getByText('appointment_modal.success_body')
    ).toBeInTheDocument();
  });

  test('renders emoji', () => {
    render(<AppointmentSuccess onClose={mockOnClose} />);
    expect(screen.getByText('🎉')).toBeInTheDocument();
  });

  test('renders close button', () => {
    render(<AppointmentSuccess onClose={mockOnClose} />);
    expect(
      screen.getByText('appointment_modal.success_button')
    ).toBeInTheDocument();
  });

  test('calls onClose when button is clicked', () => {
    render(<AppointmentSuccess onClose={mockOnClose} />);
    fireEvent.click(screen.getByText('appointment_modal.success_button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
