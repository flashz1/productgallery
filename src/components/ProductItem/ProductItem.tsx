import React, { FC } from 'react'
import Image from 'next/image'
import { TProduct } from '@/contexts/App/types'

const ProductItem: FC<TProduct> = ({
  thumbnail,
  title,
  description,
  price,
  rating,
}) => {
  return (
    <div className="w-1/2 lg:w-1/3 px-4 py-4">
      <div className="rounded overflow-hidden shadow-lg bg-gray-50">
        <figure className="relative flex align-middle justify-center w-full h-[200px] p-4 bg-gray-100">
          <Image
            className="!relative object-contain w-full h-full"
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </figure>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
            {title}
          </div>
          <p className="text-gray-400 text-xs whitespace-nowrap text-ellipsis overflow-hidden">
            {description}
          </p>
          <div className="flex items-center justify-between mt-4">
            Price:
            <div className="text-gray-700 text-base font-bold">${price}</div>
          </div>
          <div className="flex items-center justify-between mt-2">
            Rating:
            <span className="text-gray-700 text-base font-bold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
