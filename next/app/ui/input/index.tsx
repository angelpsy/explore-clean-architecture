import classNames from 'classnames';
import { TPropsClassNames } from '@/types/helpers';

type TProps = TPropsClassNames & {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export default function UIInput({
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
}: TProps) {
  return (
    <input
      id={id}
      type={type || 'text'}
      className={classNames(
        className,
        'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
    />
  );
}
