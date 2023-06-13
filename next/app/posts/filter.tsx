import { TTODO } from '@/../types/helper';

type TProps = {
  filter: Record<string, TTODO>;
  onChangeFilter(fieldName: string, value: TTODO): void;
}
export default function PostsFilter({ filter, onChangeFilter }: TProps) {
  return (
    <>
      <span>Count: </span>
      <button onClick={() => {
        const countNext = +(filter?.count || 0) + 1;
        onChangeFilter('count', countNext);
      }}>count: {filter.count || 0}</button>
    </>
  );
};