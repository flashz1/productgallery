import { ChangeEvent } from 'react'

import { useAppContext } from '@/contexts'

import Author from '@/components/Author'
import Input from '@/components/Input'
import Aside from './Aside'

const Sidebar = () => {
  const { filteredProducts, priceRange, setPriceRange } = useAppContext()

  return (
    <section className="flex flex-col h-full min-h-[100vh]">
      <Aside title={'Colors'}>
        <div>No colors available for received products. :(</div>
      </Aside>
      <Aside title={'Price Range'}>
        <div className="flex items-center">
          <Input
            className="w-1/2 mr-1"
            type={'number'}
            name={'min-price'}
            placeholder="Min"
            value={priceRange.min}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPriceRange({ ...priceRange, min: e.target.value })
            }
            errors={null}
          />
          -
          <Input
            className="w-1/2 ml-1"
            type={'number'}
            name={'max-price'}
            placeholder="Max"
            value={priceRange.max}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPriceRange({ ...priceRange, max: e.target.value })
            }
            errors={null}
          />
        </div>
      </Aside>
      <div>
        Total products:{' '}
        <span className="font-bold">{filteredProducts?.length || 0}</span>
      </div>
      <div className="mt-auto">
        <Author />
      </div>
    </section>
  )
}

export default Sidebar
