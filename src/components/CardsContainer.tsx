import React from 'react'
import CharacterCard from './CharacterCard'
import PlaceHolder from './PlaceHolder'
import Section from './Section'
import { useCharactersQuery } from '../graphql/types'

const CardsContainer = ({
  currentPage,
  filterText,
}: {
  currentPage: number
  filterText: string
}) => {
  const { data, loading } = useCharactersQuery({
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

  if (!data || !data.characters) return <div className="emptyBody" />

  return (
    <Section>
      {data?.characters?.results?.map(
        (val) => val && <CharacterCard character={val} key={val.id} />,
      )}
    </Section>
  )
}

export default CardsContainer