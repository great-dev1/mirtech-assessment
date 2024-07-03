"use client"

import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { MAX_ITEMS_PER_PAGE } from '@/lib/consts';
import { getPageParams } from '@/lib/utils';

type Props = {
  count: number
  next: string | null
  previous: string | null
}

export function BlogPagination({ count, next = "", previous }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('page', term);
    } else {
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const totalPages = Math.ceil(count / MAX_ITEMS_PER_PAGE);

  return (
    <footer className='flex items-center justify-center py-4 mt-auto'>
      <Button
        size="sm"
        disabled={!previous}
        onClick={() => {
          if (previous)
            handleSearch(getPageParams(previous))
        }}
      >
        <ChevronLeftIcon />
      </Button>
      <div className='flex gap-x-2 mx-4'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            disabled={page.toString() === searchParams.get('page')}
            className='h-8 px-3.5'
            onClick={() => {
              handleSearch(page.toString());
            }}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button
        size="sm"
        disabled={!next}
        onClick={() => {
          if (next)
            handleSearch(getPageParams(next))
        }}
      >
        <ChevronRightIcon />
      </Button>
    </footer>
  )
}
