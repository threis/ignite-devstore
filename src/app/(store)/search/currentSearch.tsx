'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export function CurrentSearch() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <Suspense fallback={true}>
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
    </Suspense>
  )
}
