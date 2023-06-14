import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UIInput from '.';

describe('UIInput', () => {
  it('should render and display an input', () => {
    render(<UIInput />);

    const inputEl = screen.getByRole('textbox');

    expect(inputEl).toBeInTheDocument();
  });

  it('should render with value', () => {
    render(<UIInput value="test" />);

    const inputEl = screen.getByRole('textbox');

    expect(inputEl).toHaveValue('test');
  });

  it('should pass onChange handler', () => {
    const handler = jest.fn();

    render(<UIInput onChange={handler} />);

    const inputEl = screen.getByRole('textbox');
    fireEvent.change(inputEl, { target: { value: 'test' } });

    expect(handler).toHaveBeenCalled();
  });

  it('should pass className', () => {
    render(<UIInput className="test" />);

    const inputEl = screen.getByRole('textbox');

    expect(inputEl).toHaveClass('test');
  });

  it('should pass type', () => {
    render(<UIInput type="password" />);

    const inputEl = document.querySelector('input');

    expect(inputEl).toHaveAttribute('type', 'password');
  });

  it('should pass id', () => {
    render(<UIInput id="test" />);

    const inputEl = document.querySelector('input');

    expect(inputEl).toHaveAttribute('id', 'test');
  });

  it('should pass placeholder', () => {
    render(<UIInput placeholder="test" />);

    const inputEl = document.querySelector('input');

    expect(inputEl).toHaveAttribute('placeholder', 'test');
  });
});
