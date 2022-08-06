import React from 'react'
import { CharacterCard, Placeholder, Section } from './index'
import { useCharactersQuery, Characters } from '../graphql/types'

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
        <Placeholder />
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
