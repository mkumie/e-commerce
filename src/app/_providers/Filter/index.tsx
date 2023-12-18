'use client'

import { createContext, SetStateAction, useContext, useState } from 'react'

interface IContextType {
  categoryFilters: string[]
  // eslint-disable-next-line no-undef
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
  sort: string
  // eslint-disable-next-line no-undef
  setSort: React.Dispatch<SetStateAction<string>>
}

export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sort: '',
  setSort: () => '',
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

// eslint-disable-next-line no-undef
export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sort, setSort] = useState('-createdAt')

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        sort,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
