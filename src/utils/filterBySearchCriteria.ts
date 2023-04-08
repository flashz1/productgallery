import { TProduct } from '@/contexts/App/types'

export const filterBySearchCriteria = (
  items: TProduct[],
  searchCriteria: string
): TProduct[] => {
  let products: TProduct[] = []

  if (searchCriteria.length) {
    products = items.filter(
      (p) =>
        p.title
          .toLocaleLowerCase()
          .indexOf(searchCriteria.toLocaleLowerCase()) !== -1
    )
  } else {
    products = items
  }

  return products
}
