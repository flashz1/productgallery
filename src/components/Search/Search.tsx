import { ChangeEvent } from 'react'

import { useAppContext } from '@/contexts'

import Input from '@/components/Input'

const Search = () => {
  const { searchCriteria, setSearchCriteria } = useAppContext()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria(event.target.value)
  }

  return (
    <div>
      <Input
        name="search"
        errors={null}
        onChange={handleInputChange}
        value={searchCriteria}
        placeholder="Search"
      />
    </div>
  )
}

export default Search
