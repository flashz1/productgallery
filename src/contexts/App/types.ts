export type TProduct = {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export interface IData {
  limit: number
  products: TProduct[]
  skip: number
  total: number
}

export interface IAppContext {
  data: IData
  filteredProducts: TProduct[]
  setData: (type: IData) => void
  searchCriteria: string
  setSearchCriteria: (type: string) => void
  priceCriteria: 'high' | 'low' | ''
  setPriceCriteria: (type: 'high' | 'low') => void
  ratingCriteria: boolean
  setRatingCriteria: (type: boolean) => void
  priceRange: {
    min: string | ''
    max: string | ''
  }
  setPriceRange: (type: { min: string | ''; max: string | '' }) => void
}

export interface IAppProviderProps {}
