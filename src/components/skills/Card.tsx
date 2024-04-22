import { CardsProps } from 'model'
import React from 'react'
import styled from 'styled-components'

const GlobalDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const BackgroundLogo = styled.figure`
  margin: 0;
  padding: 0;
  background-color: ${({ color }) => color};
  border-radius: 25px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Dash = styled.div`
  width: 45px;
  height: 2px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`
const CardOne = styled.div`
  background-color: #222233;
  width: 400px;
  height: 380px;
  border-radius: 25px;
`
const CardHeader = styled.div`
  display: flex;
  margin: 30px;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const H3 = styled.h3`
  color: ${({ color }) => color};
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin: 0;
`
const H2 = styled.h2`
  font-size: 26px;
  font-family: Recoleta;
  font-weight: normal;
  margin: 0;
`
const List = styled.li`
  font-size: 16px;
  padding-bottom: 20px;
  list-style-type: '— ';
`

const Card = ({ card }: CardsProps) => {
  return (
    <GlobalDiv>
      <CardOne>
        <CardHeader>
          <BackgroundLogo color={card.color}>
            <img alt={card.alt} src={card.src} srcSet={card.srcSet} />
          </BackgroundLogo>
          <Title>
            <H3 color={card.color}>
              <Dash color={card.color} />
              {card.title}
            </H3>
            <H2>{card.language}</H2>
          </Title>
        </CardHeader>
        <ul>
          {card.skills.map((skill, index) => (
            <List key={`skill_${card.title}_${index + card.title}`}>{skill}</List>
          ))}
        </ul>
      </CardOne>
    </GlobalDiv>
  )
}

export default Card
