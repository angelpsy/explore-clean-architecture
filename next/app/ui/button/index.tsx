import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { TPropsClassNames } from '@/types/helpers';

type TProps = PropsWithChildren &
  React.HTMLAttributes<HTMLButtonElement> &
  TPropsClassNames & {
    type?: 'submit' | 'button';
    onClick?: () => void;
    disabled?: boolean;
    theme?: 'light' | 'dark';
  };

export default function UIButton({
  type = 'submit',
  children,
  className,
  onClick,
  theme = 'dark',
  ...props
}: TProps) {
  return (
    <button
      className={classNames(
        className,
        'transition-background-color transition-300 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium transition-colors',
        {
          'bg-gray-700': theme === 'dark',
          'hover:bg-gray-900': theme === 'dark',
          'focus:ring-gray-900': theme === 'dark',
          'bg-gray-300': theme === 'light',
          'hover:bg-gray-500': theme === 'light',
          'focus:ring-gray-500': theme === 'light',
          'text-black': theme === 'light',
        }
      )}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
