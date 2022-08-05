import React from 'react'
import styled from 'styled-components'
import { Character } from '../graphql/types'

type CharacterCardProps = {
    character: Character
}


const Wrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin: 0.5rem;
  background-color: white;
  border: solid grey 1px;
  width: 200px;
  height: 200px;
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
  @media (max-width: 600px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 320px) {
    height: 80px;
    width: 80px;
  }
`

const CharacterCard = ({ character }: CharacterCardProps) => {
    return <Wrapper>
        <Image src={character.image || ''} alt="icon" className="avatar" loading='lazy' />
        <span className="characterCardLabel" >{character.name}</span>
    </Wrapper>
}

export default CharacterCard