import { render, screen } from '@testing-library/react';
import RequestInfo from './RequestInfo';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

// Mock utils
jest.mock('../../utils.js', () => ({
  STATUS_STYLES: {
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    accepted: 'bg-green-50 text-green-700 border-green-200',
  },
  formatDate: (date) => `formatted-${date}`,
}));

describe('RequestInfo', () => {
  const mockRequest = {
    guest_name: 'John Doe',
    guest_email: 'john@example.com',
    requested_at: '2024-01-01T10:00:00Z',
    status: 'pending',
    service: {
      name: 'Consultation',
      location: 'Office',
    },
  };

  test('renders guest info', () => {
    render(<RequestInfo request={mockRequest} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('renders status badge', () => {
    render(<RequestInfo request={mockRequest} />);
    expect(screen.getByText('dashboard.filters.pending')).toBeInTheDocument();
  });

  test('renders service info', () => {
    render(<RequestInfo request={mockRequest} />);
    expect(screen.getByText('request_card.service_label:')).toBeInTheDocument();
    expect(screen.getByText('Consultation')).toBeInTheDocument();
    expect(screen.getByText('· Office')).toBeInTheDocument();
  });

  test('renders formatted date', () => {
    render(<RequestInfo request={mockRequest} />);
    expect(
      screen.getByText('formatted-2024-01-01T10:00:00Z')
    ).toBeInTheDocument();
  });
});
