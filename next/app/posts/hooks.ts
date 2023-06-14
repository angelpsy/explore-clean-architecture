import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { TTODO } from '@/../types/helper';

export const useFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlerChangeFilter = (
    field: string,
    value: TTODO,
    currentFilter: Record<string, TTODO>
  ) => {
    const filter = {
      ...currentFilter,
      [field]: value,
    } as Record<string, TTODO>;
    const current = new URLSearchParams(searchParams.toString());

    Object.keys(filter).forEach((key: string) => {
      current.set(key, filter[key].toString());
    });
    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  return {
    handlerChangeFilter,
  };
};
