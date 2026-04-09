import { render, screen } from '@testing-library/react';
import AppointmentModal from './AppointmentModal';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock API
jest.mock('../api', () => ({
  api: {
    createAppointment: jest.fn(),
  },
}));

// Mock child components
jest.mock('./ModalOverlay', () => {
  return function MockModalOverlay({ children }) {
    return <div data-testid="modal-overlay">{children}</div>;
  };
});

jest.mock('./ModalHeader', () => {
  return function MockModalHeader() {
    return <div data-testid="modal-header">Modal Header</div>;
  };
});

jest.mock('./AppointmentForm', () => {
  return function MockAppointmentForm() {
    return <div data-testid="appointment-form">Appointment Form</div>;
  };
});

jest.mock('./AppointmentSuccess', () => {
  return function MockAppointmentSuccess() {
    return <div data-testid="appointment-success">Appointment Success</div>;
  };
});

describe('AppointmentModal', () => {
  const mockNutritionist = {
    id: 1,
    name: 'Dr. Smith',
    specialty: 'Nutrition',
    services: [{ id: 1, name: 'Consultation' }],
  };
  const mockOnClose = jest.fn();

  test('renders modal with form initially', () => {
    render(
      <AppointmentModal nutritionist={mockNutritionist} onClose={mockOnClose} />
    );
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
    expect(screen.getByTestId('modal-header')).toBeInTheDocument();
    expect(screen.getByTestId('appointment-form')).toBeInTheDocument();
  });
});
