import React from 'react'
import {
  App as AppWrapper,
  Header,
  Section,
  Footer,
  CardsContainer,
} from './components'
import { Characters } from './graphql/types'
import useDebounce from './util/useDebounce'

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageInfo, setPageInfo] = React.useState<Pick<Characters, 'info'>>()
  const [inputText, setInputText] = React.useState('')
  const { result } = useDebounce(inputText)

  React.useEffect(() => {
    setCurrentPage(1)
  }, [result])

  const handlePreviousPage = () => {
    if (!!pageInfo?.info?.prev) {
      setCurrentPage(pageInfo?.info?.prev)
    }
  }

  const handleNextPage = () => {
    if (!!pageInfo?.info?.next) {
      setCurrentPage(pageInfo?.info?.next)
    }
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
      <CardsContainer
        currentPage={currentPage}
        filterText={result}
        pageInfo={setPageInfo}
      />
      <Footer>Made with &#x1F90D; by Rahul Agrawal</Footer>
    </AppWrapper>
  )
}

export default App
