import React from 'react'

import AppWrapper from './components/App'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import CardsContainer from './components/CardsContainer'
import useDebounce from './util/useDebounce'

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [inputText, setInputText] = React.useState('')
  const { result } = useDebounce(inputText)

  React.useEffect(() => {
    setCurrentPage(1)
  }, [result])

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
      <CardsContainer currentPage={currentPage} filterText={result} />
      <Footer>Made with &#x1F90D; by Rahul Agrawal</Footer>
    </AppWrapper>
  )
}

export default App
