import React from 'react'

import AppWrapper from './components/App'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import CharacterCard from './components/CharacterCard'
import { useCharactersQuery } from './graphql/types'

const SubApp = ({currentPage}: {currentPage: number}) => {
  const { data } = useCharactersQuery({
    variables: {
      page: currentPage,
    },
  })

  if (!data || !data.characters) return <div style={{flex: '1'}} />

  return (
    <>
      <Section>
        {data?.characters?.results?.map(
          (val) => val && <CharacterCard character={val} key={val.id} />,
        )}
      </Section>
    </>
  )
}

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

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
      <Section style={{paddingTop: '10px', gap: '10px'}}>
        <button onClick={handlePreviousPage} style={{height: 'max-content'}}>{`<< Prev`}</button>
        <button onClick={handleNextPage} style={{height: 'max-content'}}>{`Next >>`}</button>
      </Section>
      <SubApp currentPage={currentPage} />
      <Footer />
    </AppWrapper>
  )
}

export default App
