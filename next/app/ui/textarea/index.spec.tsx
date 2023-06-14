import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UITextarea from './';

describe('UITextarea', () => {
  it('should render and display an textarea', () => {
    render(<UITextarea />);

    const textareaEl = screen.getByRole('textbox');

    expect(textareaEl).toBeInTheDocument();
  });

  it('should render with value', () => {
    render(<UITextarea value="test" />);

    const textareaEl = screen.getByRole('textbox');

    expect(textareaEl).toHaveValue('test');
  });

  it('should pass onChange handler', () => {
    const handler = jest.fn();

    render(<UITextarea onChangeField={handler} />);

    const textareaEl = screen.getByRole('textbox');
    fireEvent.change(textareaEl, { target: { value: 'test' } });

    expect(handler).toHaveBeenCalled();
  });

  it('should pass className', () => {
    render(<UITextarea className="test" />);

    const textareaEl = screen.getByRole('textbox');

    expect(textareaEl).toHaveClass('test');
  });

  it('should pass id', () => {
    render(<UITextarea id="test" />);

    const textareaEl = document.querySelector('textarea');

    expect(textareaEl).toHaveAttribute('id', 'test');
  });

  it('should pass placeholder', () => {
    render(<UITextarea placeholder="test" />);

    const textareaEl = document.querySelector('textarea');

    expect(textareaEl).toHaveAttribute('placeholder', 'test');
  });

  it('should pass rows', () => {
    render(<UITextarea rows={10} />);

    const textareaEl = document.querySelector('textarea');

    expect(textareaEl).toHaveAttribute('rows', '10');
  });
});