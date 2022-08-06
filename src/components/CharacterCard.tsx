import React from 'react'
import styled from 'styled-components'
import { Character } from '../graphql/types'
import { ReactComponent as Female } from '../assets/image/female.svg'
import { ReactComponent as Male } from '../assets/image/male.svg'
import { ReactComponent as GenderLess } from '../assets/image/genderless.svg'
import { ReactComponent as UnknownGender } from '../assets/image/unknown.svg'

type CharacterCardProps = {
  character: Character
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin: 0.5rem;
  background-color: white;
  border: solid grey 1px;
  width: 200px;
  height: 200px;
  border-radius: 3px;
  box-shadow: 2px 4px 10px #ccc;
  @media (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 336px) {
    width: 140px;
  }

  @media (max-width: 320px) {
    width: 120px;
  }
`

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 3px;
  @media (max-width: 600px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 320px) {
    height: 80px;
    width: 80px;
  }
`

const Status = styled.span`
  position: absolute;
  width: 75px;
  height: 20px;
  top: 5px;
  right: 0px;
  border-radius: 3px 0 0 3px;
  background: #00800094;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.8em;
  align-items: center;
`

const Alive = styled(Status)`
  background: #00800094;
`

const Dead = styled(Status)`
  background: #80000094;
`

const Unknown = styled(Status)`
  background: #0c008094;
`

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
