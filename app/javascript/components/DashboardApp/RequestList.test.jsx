import { render, screen } from '@testing-library/react';
import RequestList from './RequestList';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, options) => `${key}${options ? JSON.stringify(options) : ''}`, // Return key with options for testing
  }),
}));

// Mock RequestCard
jest.mock('../RequestCard/RequestCard', () => {
  return function MockRequestCard({ request }) {
    return (
      <div data-testid={`request-card-${request.id}`}>Request {request.id}</div>
    );
  };
});

describe('RequestList', () => {
  test('shows loading spinner when loading', () => {
    render(
      <RequestList
        requests={[]}
        loading={true}
        statusFilter="pending"
        onAction={jest.fn()}
      />
    );
    expect(screen.getByRole('status')).toBeInTheDocument(); // spinner should have role status
  });

  test('shows empty state when no requests', () => {
    render(
      <RequestList
        requests={[]}
        loading={false}
        statusFilter="pending"
        onAction={jest.fn()}
      />
    );
    expect(screen.getByText('📭')).toBeInTheDocument();
    expect(
      screen.getByText('dashboard.no_requests{"status":"pending"}')
    ).toBeInTheDocument();
  });

  test('renders request cards when requests exist', () => {
    const requests = [
      { id: 1, guest_name: 'John' },
      { id: 2, guest_name: 'Jane' },
    ];
    render(
      <RequestList
        requests={requests}
        loading={false}
        statusFilter="pending"
        onAction={jest.fn()}
      />
    );
    expect(screen.getByTestId('request-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('request-card-2')).toBeInTheDocument();
  });
});
