import classNames from 'classnames';
import { TPropsClassNames } from '@/types/helpers';

type TPops = TPropsClassNames & {
  id: string;
  rows?: number;
  placeholder: string;
  value: string;
  onChangeField(value: string): void;
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
        'block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChangeField(e.target.value);
      }}
    ></textarea>
  );
}
