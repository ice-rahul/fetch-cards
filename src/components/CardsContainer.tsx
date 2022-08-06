import React from 'react'
import CharacterCard from './CharacterCard'
import PlaceHolder from './PlaceHolder'
import Section from './Section'
import { Characters } from '../graphql/types'
import { useCharactersQuery } from '../graphql/types'

const CardsContainer = ({
  currentPage,
  filterText,
  pageInfo,
}: {
  currentPage: number
  filterText: string
  pageInfo?: (info: Pick<Characters, 'info'>) => void
}) => {
  const { data, loading } = useCharactersQuery({
    variables: {
      page: currentPage,
      filter: { name: filterText },
    },
  })

  React.useEffect(() => {
    !!data?.characters?.info && pageInfo?.({ info: data?.characters?.info })
  }, [data, pageInfo])

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
