import { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import Random from 'project-name-generator'

const SearchStateContext = createContext()

export const SearchProvider = ({ children }) => {
  return(
    <SearchStateContext.Provider value={'brokenmold'}>
      {children}
    </SearchStateContext.Provider>
  )
}

const searchDomain = async event => {
  const router = useRouter()

  event.preventDefault()
  const searchTerm = term.value.toLowerCase().replace(/\s+/g, '')
  router.push(`/domain/${searchTerm}`)
}

const getRandom = async event => {
  event.preventDefault()

  const rando = Random().spaced
  document.getElementById('term').value = `${rando}`
}

// export { searchDomain, getRandom, preventDefault }
export const useSearch = () => useContext(SearchStateContext)