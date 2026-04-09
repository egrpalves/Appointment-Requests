import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RequestActions from './RequestActions';

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('RequestActions', () => {
  const mockOnAccept = jest.fn();
  const mockOnReject = jest.fn();

  beforeEach(() => {
    mockOnAccept.mockClear();
    mockOnReject.mockClear();
  });

  test('renders accept and reject buttons initially', () => {
    render(<RequestActions onAccept={mockOnAccept} onReject={mockOnReject} />);
    expect(screen.getByText('request_card.accept')).toBeInTheDocument();
    expect(screen.getByText('request_card.reject')).toBeInTheDocument();
  });

  test('shows confirmation when accept is clicked', () => {
    render(<RequestActions onAccept={mockOnAccept} onReject={mockOnReject} />);
    fireEvent.click(screen.getByText('request_card.accept'));
    expect(screen.getByText('request_card.confirm_accept')).toBeInTheDocument();
  });

  test('calls onAccept when confirmed', async () => {
    mockOnAccept.mockResolvedValue();
    render(<RequestActions onAccept={mockOnAccept} onReject={mockOnReject} />);
    fireEvent.click(screen.getByText('request_card.accept'));
    fireEvent.click(screen.getByText('request_card.yes'));
    await waitFor(() => expect(mockOnAccept).toHaveBeenCalled());
  });

  test('shows confirmation when reject is clicked', () => {
    render(<RequestActions onAccept={mockOnAccept} onReject={mockOnReject} />);
    fireEvent.click(screen.getByText('request_card.reject'));
    expect(screen.getByText('request_card.confirm_reject')).toBeInTheDocument();
  });

  test('calls onReject when confirmed', async () => {
    mockOnReject.mockResolvedValue();
    render(<RequestActions onAccept={mockOnAccept} onReject={mockOnReject} />);
    fireEvent.click(screen.getByText('request_card.reject'));
    fireEvent.click(screen.getByText('request_card.yes'));
    await waitFor(() => expect(mockOnReject).toHaveBeenCalled());
  });
});
