import React from 'react'
import styled from 'styled-components'
import { CardContactProps } from 'model'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  margin: 0;
`
const Dash = styled.div`
  width: 45px;
  height: 2px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`
const Subtitle = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
`
const LinkGroup = styled.div`
  display: flex;
`
const Link = styled.a<{ $isLastChild: boolean }>`
  display: flex;
  align-items: center;
  ${props => !props.$isLastChild && 'margin-right: 20px;'}
  color: #ffffff;
  text-decoration: none;
`
const Img = styled.img`
  margin: 10px 10px 10px 0;
`

export const CardContact = (props: CardContactProps) => {
  const { contact } = props
  return (
    <Wrapper>
      <Title color={contact.color}>
        <Dash color={contact.color} />
        <Subtitle>{contact.type}</Subtitle>
      </Title>
      <LinkGroup>
        {contact.items.map((item, index) => (
          <Link
            $isLastChild={(contact.items.length === index + 1) as boolean}
            href={item.url}
            key={`link_${index + item.url}`}
          >
            <Img src={item.logo} />
            {item.title}
          </Link>
        ))}
      </LinkGroup>
    </Wrapper>
  )
}
