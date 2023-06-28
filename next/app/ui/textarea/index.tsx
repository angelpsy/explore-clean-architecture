import classNames from 'classnames';
import { TPropsClassNames } from '@/types/helpers';

type TPops = TPropsClassNames & {
  id?: string;
  rows?: number;
  placeholder?: string;
  value?: string;
  onChangeField?(value: string): void;
};

export default function UITextarea({
  id,
  rows = 4,
  placeholder,
  value,
  className,
  onChangeField,
}: TPops) {
  return (
    <textarea
      id={id}
      rows={rows}
      className={classNames(
        className,
        'block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChangeField && onChangeField(e.target.value);
      }}
    ></textarea>
  );
}
