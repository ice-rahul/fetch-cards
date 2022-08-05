import React from 'react'
import CharacterCard from './CharacterCard'

function PlaceHolder() {
  const character = {
    name: 'Loading...',
    image: 'https://via.placeholder.com/150',
  }
  return (
    <>
      {[...Array.from({ length: 18 })].map((_, idx) => (
        <CharacterCard character={character} key={idx} />
      ))}
    </>
  )
}

export default PlaceHolder
