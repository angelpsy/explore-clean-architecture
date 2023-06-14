import classNames from 'classnames';
import { TPropsClassNames } from '@/types/helpers';

type TProps = TPropsClassNames & {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  onClick?: () => void;
};

export default function UIButton({
  type = 'submit',
  children,
  className,
  onClick,
  ...props
}: TProps & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(
        className,
        'inline-flex items-center px-5 py-2.5 text-sm font-medium text-center rounded-lg focus:ring-4 bg-blue-700 focus:ring-blue-900 hover:bg-blue-900'
      )}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
