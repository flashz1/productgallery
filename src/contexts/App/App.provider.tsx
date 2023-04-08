import { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { AppContext } from './App.context'
import { IAppProviderProps, IData, TProduct } from './types'
import { filterByPriceRange } from '@/utils/filterByPriceRange'
import { filterBySearchCriteria } from '@/utils/filterBySearchCriteria'

export const AppProvider = ({
  children,
}: PropsWithChildren<IAppProviderProps>) => {
  const [data, setData] = useState<IData>({} as IData)
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>(
    [] as TProduct[]
  )
  const [searchCriteria, setSearchCriteria] = useState<string>('')
  const [priceCriteria, setPriceCriteria] = useState<'high' | 'low' | ''>('')
  const [ratingCriteria, setRatingCriteria] = useState<boolean>(false)
  const [priceRange, setPriceRange] = useState<{
    min: string | ''
    max: string | ''
  }>({ min: '', max: '' })

  useEffect(() => {
    if (data) {
      setFilteredProducts(data.products)
    }
  }, [data])

  useEffect(() => {
    if (data?.products) {
      setFilteredProducts(
        filterByPriceRange(
          filterBySearchCriteria(data.products, searchCriteria),
          priceRange.min,
          priceRange.max
        )
      )
    }
  }, [searchCriteria])

  useEffect(() => {
    setRatingCriteria(false)
    setFilteredProducts(
      [...filteredProducts].sort((a, b) => {
        if (priceCriteria === 'high') {
          return b.price - a.price
        }
        return a.price - b.price
      })
    )
  }, [priceCriteria])

  useEffect(() => {
    setFilteredProducts(
      [...filteredProducts].sort((a, b) => {
        if (ratingCriteria) {
          return b.rating - a.rating
        }
        return a.rating - b.rating
      })
    )
  }, [ratingCriteria])

  useEffect(() => {
    if (data?.products) {
      setFilteredProducts(
        filterByPriceRange(
          filterBySearchCriteria([...data.products], searchCriteria),
          priceRange.min,
          priceRange.max
        )
      )
    }
  }, [priceRange.min, priceRange.max])

  const state = useMemo(() => {
    return {
      data,
      setData,
      filteredProducts,
      searchCriteria,
      setSearchCriteria,
      priceCriteria,
      setPriceCriteria,
      ratingCriteria,
      setRatingCriteria,
      priceRange,
      setPriceRange,
    }
  }, [filteredProducts])

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}
