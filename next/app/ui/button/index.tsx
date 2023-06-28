import classNames from 'classnames';
import { TPropsClassNames } from '@/types/helpers';

type TProps = React.HTMLAttributes<HTMLButtonElement> &
  TPropsClassNames & {
    type?: 'submit' | 'button';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  };

export default function UIButton({
  type = 'submit',
  children,
  className,
  onClick,
  ...props
}: TProps) {
  return (
    <button
      className={classNames(
        className,
        'inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium hover:bg-blue-900 focus:ring-4 focus:ring-blue-900'
      )}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
