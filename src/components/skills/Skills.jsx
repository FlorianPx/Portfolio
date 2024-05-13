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
  // const letters = [
  //   { letter: 'C', delay: '0.13' },
  //   { letter: 'o', delay: '0.12' },
  //   { letter: 'm', delay: '0.11' },
  //   { letter: 'p', delay: '0.1' },
  //   { letter: 'é', delay: '0.09' },
  //   { letter: 't', delay: '0.08' },
  //   { letter: 'e', delay: '0.07' },
  //   { letter: 'n', delay: '0.06' },
  //   { letter: 'c', delay: '0.05' },
  //   { letter: 'e', delay: '0.04' },
  //   { letter: 's', delay: '0.03' },
  // ]

  return (
    <Section>
      <Title>
        Compétences
        {/* <span>
          {letters.map((item, index) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${item.letter}-${index}`}
            >
              {item.letter}
            </span>
          ))}
        </span> */}
      </Title>
      <Cards>
        {cardArray.map((card, index) => (
          <Card card={card} key={`skill_${index + card.title}`} />
        ))}
      </Cards>
    </Section>
  )
}
