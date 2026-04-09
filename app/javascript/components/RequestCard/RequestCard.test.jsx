import { render, screen } from '@testing-library/react';
import RequestCard from './RequestCard';

// Mock child components
jest.mock('./RequestAvatar', () => {
  return function MockRequestAvatar() {
    return <div data-testid="avatar">Avatar</div>;
  };
});

jest.mock('./RequestInfo', () => {
  return function MockRequestInfo() {
    return <div data-testid="info">Info</div>;
  };
});

jest.mock('./RequestActions', () => {
  return function MockRequestActions() {
    return <div data-testid="actions">Actions</div>;
  };
});

describe('RequestCard', () => {
  const mockRequest = { id: 1, guest_name: 'John Doe' };
  const mockOnAccept = jest.fn();
  const mockOnReject = jest.fn();

  test('renders components for pending status', () => {
    render(
      <RequestCard
        request={mockRequest}
        statusFilter="pending"
        onAccept={mockOnAccept}
        onReject={mockOnReject}
      />
    );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('info')).toBeInTheDocument();
    expect(screen.getByTestId('actions')).toBeInTheDocument();
  });

  test('does not render actions for non-pending status', () => {
    render(
      <RequestCard
        request={mockRequest}
        statusFilter="accepted"
        onAccept={mockOnAccept}
        onReject={mockOnReject}
      />
    );
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('info')).toBeInTheDocument();
    expect(screen.queryByTestId('actions')).not.toBeInTheDocument();
  });
});
