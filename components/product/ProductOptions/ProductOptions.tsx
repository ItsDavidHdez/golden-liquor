import { memo } from 'react'
import { Swatch } from '@components/product'
import type { ProductOption } from '@commerce/types/product'
import { SelectedOptions } from '../helpers'

interface ProductOptionsProps {
  options: ProductOption[]
  selectedOptions: SelectedOptions
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <div>
      {options.map((opt) => (
        <div className="pb-4" key={opt.displayName}>
          {/* <h2 className="uppercase font-medium text-sm tracking-wide">
            {opt.displayName}
          </h2> */}
          <div className="flex flex-row py-4"></div>
        </div>
      ))}
    </div>
  )
}

export default memo(ProductOptions)
