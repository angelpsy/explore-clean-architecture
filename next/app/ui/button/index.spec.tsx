import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UIButton from './index';

describe('UIButton', () => {
  it('should render and display a button', () => {
    render(<UIButton>Click me</UIButton>);

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeInTheDocument();
  });

  it('should render with children', () => {
    render(<UIButton>Click me</UIButton>);

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toHaveTextContent('Click me');
  });

  it('should pass onClick handler', () => {
    const handler = jest.fn();

    render(<UIButton onClick={handler}>Click me</UIButton>);

    const buttonEl = screen.getByRole('button');
    buttonEl.click();

    expect(handler).toHaveBeenCalled();
  });

  it('should pass className', () => {
    render(<UIButton className="test">Click me</UIButton>);

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toHaveClass('test');
  });

  it('should pass type', () => {
    render(<UIButton type="button">Click me</UIButton>);

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toHaveAttribute('type', 'button');
  });

  it('should pass disabled', () => {
    render(<UIButton disabled>Click me</UIButton>);

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeDisabled();
  });

  it('should pass other props', () => {
    render(<UIButton data-testid="test">Click me</UIButton>);

    const buttonEl = screen.getByTestId('test');

    expect(buttonEl).toBeInTheDocument();
  });
});
