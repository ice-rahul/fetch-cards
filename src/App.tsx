import React from 'react'

import AppWrapper from './components/App'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import CharacterCard from './components/CharacterCard'
import PlaceHolder from './components/PlaceHolder'
import { useCharactersQuery } from './graphql/types'

const CardsContainer = ({ currentPage }: { currentPage: number }) => {
  const { data, loading } = useCharactersQuery({
    variables: {
      page: currentPage,
    },
  })

  if (loading) {
    return (
      <Section>
        <PlaceHolder />
      </Section>
    )
  }

  if (!data || !data.characters) return <div className="emptyBody" />

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

  const handlePreviousPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
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
        <input className="searchText" placeholder="Search Characters" />
        <button onClick={handleNextPage} className="navigationButtons">
          <span>{`Next >>`}</span>
        </button>
      </Section>
      <CardsContainer currentPage={currentPage} />
      <Footer>Made with &#x1F90D; by Rahul Agrawal</Footer>
    </AppWrapper>
  )
}

export default App
