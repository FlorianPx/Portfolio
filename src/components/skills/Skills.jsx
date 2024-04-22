import React from 'react'
import styled from 'styled-components'

import { cardArray, devices } from '../../constants'
import { Section } from '../common/Section'
import { Title } from '../common/Title'

import Card from './Card'

const Cards = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > :last-child {
    margin-left: 0;
    margin-top: 20px;
  }

  @media screen and (min-width: ${devices.tablet}px) {
    flex-direction: row;
    > :last-child {
      margin-left: 80px;
      margin-top: 0;
    }
  }
`

export const Skills = () => {
  return (
    <Section>
      <Title>Compétences</Title>
      <Cards>
        {cardArray.map((card, index) => (
          <Card card={card} key={`skill_${index + card.title}`} />
        ))}
      </Cards>
    </Section>
  )
}
