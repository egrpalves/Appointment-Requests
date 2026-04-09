import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentForm from './AppointmentForm';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, // Return key as translation for testing
  }),
}));

// Mock utils
jest.mock('../../utils', () => ({
  MIN_DATE: () => '2024-01-01T00:00',
}));

describe('AppointmentForm', () => {
  const mockProps = {
    form: {
      guest_name: 'John Doe',
      guest_email: 'john@example.com',
      service_id: '1',
      requested_at: '2024-01-01T10:00',
    },
    services: [
      {
        id: '1',
        name: 'Service 1',
        location: 'Location 1',
        price: 50,
        duration_minutes: 60,
      },
      {
        id: '2',
        name: 'Service 2',
        location: 'Location 2',
        price: 75,
        duration_minutes: 90,
      },
    ],
    status: 'idle',
    errorMsg: '',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    onClose: jest.fn(),
  };

  beforeEach(() => {
    mockProps.onChange.mockClear();
    mockProps.onSubmit.mockClear();
    mockProps.onClose.mockClear();
  });

  test('renders form fields', () => {
    render(<AppointmentForm {...mockProps} />);
    expect(
      screen.getByLabelText('appointment_modal.guest_name *')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('appointment_modal.guest_email *')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('appointment_modal.datetime *')
    ).toBeInTheDocument();
  });

  test('renders service select when multiple services', () => {
    render(<AppointmentForm {...mockProps} />);
    expect(
      screen.getByLabelText('appointment_modal.service')
    ).toBeInTheDocument();
  });

  test('does not render service select when single service', () => {
    const propsWithOneService = {
      ...mockProps,
      services: [mockProps.services[0]],
    };
    render(<AppointmentForm {...propsWithOneService} />);
    expect(
      screen.queryByLabelText('appointment_modal.service')
    ).not.toBeInTheDocument();
  });

  test('calls onChange when input values change', () => {
    render(<AppointmentForm {...mockProps} />);
    const nameInput = screen.getByLabelText('appointment_modal.guest_name *');
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    expect(mockProps.onChange).toHaveBeenCalledWith('guest_name', 'Jane Doe');
  });

  test('calls onSubmit when form is submitted', () => {
    render(<AppointmentForm {...mockProps} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(mockProps.onSubmit).toHaveBeenCalledTimes(1);
  });

  test('shows error message when status is error', () => {
    const propsWithError = {
      ...mockProps,
      status: 'error',
      errorMsg: 'Test error',
    };
    render(<AppointmentForm {...propsWithError} />);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  test('disables submit button when loading', () => {
    const propsLoading = { ...mockProps, status: 'loading' };
    render(<AppointmentForm {...propsLoading} />);
    const submitButton = screen.getByText('appointment_modal.submit');
    expect(submitButton).toBeDisabled();
  });
});
