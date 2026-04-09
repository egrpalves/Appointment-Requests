import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

// Mock react-i18next
const mockChangeLanguage = jest.fn();
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      resolvedLanguage: 'en',
      language: 'en',
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

describe('LanguageSelector', () => {
  test('renders select with languages', () => {
    render(<LanguageSelector />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('en');
  });

  test('displays language options', () => {
    render(<LanguageSelector />);
    expect(screen.getByText('🇬🇧')).toBeInTheDocument();
    expect(screen.getByText('🇵🇹')).toBeInTheDocument();
  });

  test('calls changeLanguage on selection', () => {
    render(<LanguageSelector />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'pt-PT' } });
    expect(mockChangeLanguage).toHaveBeenCalledWith('pt-PT');
  });
});
