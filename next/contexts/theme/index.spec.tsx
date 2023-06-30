import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeContext, ThemeProvider } from './index';

describe('ThemeProvider', () => {
  it('should toggle the theme when the button is clicked', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <button onClick={toggleTheme}>{theme}</button>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const button = getByText('light');
    fireEvent.click(button);

    expect(getByText('dark')).toBeInTheDocument();

    fireEvent.click(button);

    expect(getByText('light')).toBeInTheDocument();
  });
});
