import React from 'react'
import { Wrapper, Image, Alive, Dead, Unknown } from './index'
import { Character } from '../graphql/types'
import { ReactComponent as Female } from '../assets/image/female.svg'
import { ReactComponent as Male } from '../assets/image/male.svg'
import { ReactComponent as GenderLess } from '../assets/image/genderless.svg'
import { ReactComponent as UnknownGender } from '../assets/image/unknown.svg'

type CharacterCardProps = {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const getStatus = () => {
    switch (character.status) {
      case 'Alive':
        return <Alive>{character.status}</Alive>
      case 'Dead':
        return <Dead>{character.status}</Dead>
      default:
        return <Unknown>{character.status}</Unknown>
    }
  }

  const getGender = () => {
    switch (character.gender) {
      case 'Female':
        return <Female width="20px" height="20px" />
      case 'Male':
        return <Male width="20px" height="20px" />
      case 'Genderless':
        return <GenderLess width="20px" height="20px" />
      default:
        return <UnknownGender width="20px" height="20px" />
    }
  }

  return (
    <Wrapper>
      <div style={{ position: 'relative' }}>
        <Image
          src={character.image || ''}
          alt="icon"
          className="avatar"
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            background: 'white',
            borderRadius: '0 3px',
            padding: '5px 5px 0 0',
            cursor: 'pointer',
          }}
          title={character.gender || ''}
        >
          {getGender()}
        </div>
      </div>
      {getStatus()}
      <span className="characterCardLabel">{character.name}</span>
    </Wrapper>
  )
}

export default CharacterCard
