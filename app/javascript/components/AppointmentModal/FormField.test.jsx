import { render, screen } from '@testing-library/react';
import FormField, { inputClass } from './FormField';

describe('FormField', () => {
  test('renders label and children', () => {
    render(
      <FormField label="Test Label">
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('shows required asterisk when required', () => {
    render(
      <FormField label="Required Field" required>
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('does not show asterisk when not required', () => {
    render(
      <FormField label="Optional Field">
        <input type="text" />
      </FormField>
    );
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  test('inputClass constant is defined', () => {
    expect(inputClass).toBe(
      'w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400 transition'
    );
  });
});
