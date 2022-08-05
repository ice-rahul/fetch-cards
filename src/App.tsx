import React from 'react'

import AppWrapper from './components/App'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import CharacterCard from './components/CharacterCard'
import PlaceHolder from './components/PlaceHolder'
import { useCharactersQuery } from './graphql/types'

const CardsContainer = ({
  currentPage,
  filterText,
}: {
  currentPage: number
  filterText: string
}) => {

  const { data, loading, previousData } = useCharactersQuery({
    variables: {
      page: currentPage,
      filter: { name: filterText },
    },
  })

  if (loading) {
    return (
      <Section>
        <PlaceHolder />
      </Section>
    )
  }

  if (
    (!data || !data.characters) &&
    (!previousData || !previousData.characters)
  )
    return <div className="emptyBody" />

  return (
    <Section>
      {data?.characters?.results?.map(
        (val) => val && <CharacterCard character={val} key={val.id} />,
      )}
    </Section>
  )
}

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [inputText, setInputText] = React.useState('')
  const [filterText, setFilterText] = React.useState('')
  const filterFnTimeout = React.useRef<NodeJS.Timeout>()

  const handleFilterFn = (inputText: string) => {
    setCurrentPage(1)
    setFilterText(inputText)
  }

  React.useEffect(() => {
    if (filterFnTimeout.current) {
      clearTimeout(filterFnTimeout.current)
    }
    filterFnTimeout.current = setTimeout(() => {
      handleFilterFn(inputText)
    }, 1000)

    return () => {
      if (filterFnTimeout.current) {
        clearTimeout(filterFnTimeout.current)
      }
    }
  }, [inputText])

  const handlePreviousPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleInputText = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value)
  }

  return (
    <AppWrapper>
      <Header>
        <span>Rick and Morty Character Card Info</span>
      </Header>
      <Section className="paginationContainer">
        <button onClick={handlePreviousPage} className="navigationButtons">
          <span>{`<< Prev`}</span>
        </button>
        <input
          className="searchText"
          placeholder="Search Characters"
          value={inputText}
          onChange={handleInputText}
        />
        <button onClick={handleNextPage} className="navigationButtons">
          <span>{`Next >>`}</span>
        </button>
      </Section>
      <CardsContainer currentPage={currentPage} filterText={filterText} />
      <Footer>Made with &#x1F90D; by Rahul Agrawal</Footer>
    </AppWrapper>
  )
}

export default App
