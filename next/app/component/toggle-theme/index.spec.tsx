import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeContext } from '@/contexts/theme';
import { ToggleTheme } from './index';

describe('ToggleTheme', () => {
  it('should toggle the theme when clicked', () => {
    const toggleThemeMock = jest.fn();
    const { getByText } = render(
      <ThemeContext.Provider
        value={{ theme: 'light', toggleTheme: toggleThemeMock }}
      >
        <ToggleTheme />
      </ThemeContext.Provider>
    );

    const button = getByText('light');
    fireEvent.click(button);

    expect(toggleThemeMock).toHaveBeenCalled();
  });
  it('should display the current theme', () => {
    const { getByText, queryAllByText } = render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => {} }}>
        <ToggleTheme />
      </ThemeContext.Provider>
    );

    const lightButtons = queryAllByText('light');
    const darkButtons = queryAllByText('dark');

    expect(lightButtons.length).toBe(1);
    expect(darkButtons.length).toBe(0);
  });
});
