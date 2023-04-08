import { TProduct } from '@/contexts/App/types'

export const filterByPriceRange = (
  items: TProduct[],
  min: string | '',
  max: string | ''
): TProduct[] => {
  return items.filter(
    (item) =>
      (min !== '' ? item.price >= +min : true) &&
      (max !== '' ? item.price <= +max : true)
  )
}
