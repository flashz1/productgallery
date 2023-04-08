import { useEffect } from 'react'
import useSWR from 'swr'

import { useAppContext } from '@/contexts'

import Layout from '@/components/Layout'
import ProductItem from '@/components/ProductItem'
import Search from '@/components/Search'
import Sidebar from '@/components/Sidebar'
import Button from '@/components/Button'

import { DUMMY_JSON_URL } from '@/constants'

const Home = () => {
  const { data: fetchedData, error } = useSWR(DUMMY_JSON_URL)
  const {
    filteredProducts,
    setData,
    priceCriteria,
    setPriceCriteria,
    setRatingCriteria,
  } = useAppContext()

  useEffect(() => {
    if (fetchedData) {
      setData(fetchedData)
    }
  }, [fetchedData])

  return (
    <Layout
      pageTitle="Product Gallery - Home"
      pageDescription="Product Gallery - is a test products page with Search, Filters."
    >
      <div className="fixed top-0 left-0 right-0 p-4 bg-white z-10">
        <Search />
      </div>
      <div className="layout-side left-side md:w-1/4 bg-blue-100">
        <Sidebar />
      </div>
      <div className="layout-side right-side md:w-3/4 relative">
        <div className="flex">
          <Button
            className="w-auto mx-4"
            label="Price Low to High"
            onClick={() => setPriceCriteria('low')}
            disabled={priceCriteria === 'low'}
          />
          <Button
            className="w-auto mx-4"
            label="Price High to Low"
            onClick={() => setPriceCriteria('high')}
            disabled={priceCriteria === 'high'}
          />
          <Button
            className="w-auto mx-4"
            label="Popular first"
            onClick={() => setRatingCriteria(true)}
          />
        </div>
        {filteredProducts ? (
          <div className="flex flex-row flex-wrap w-full">
            {filteredProducts.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </div>
        ) : (
          'There are no items that correspond to your filters.'
        )}
      </div>
    </Layout>
  )
}

export default Home
