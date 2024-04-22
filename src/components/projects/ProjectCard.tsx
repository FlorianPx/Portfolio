import { ProjectCardProps } from 'model'
import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
`

const GlobalDiv = styled.div`
  width: 345px;
  min-height: 350px;
  background: #222233;
  border-radius: 25px;
  margin-bottom: 50px;
  padding: 25px;
  transition: background 0.5s ease-out;
  &:hover {
    background: #33334f;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const H2 = styled.h2`
  font-size: 14px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #dfb74e;
  margin: 0;
`
const Dash = styled.div`
  width: 45px;
  height: 2px;
  margin-right: 8px;
  background-color: #dfb74e;
`
const H1 = styled.h1`
  font-family: Recoleta;
  font-weight: normal;
  font-size: 26px;
  color: #ffffff;
  margin: 5px 0 14px 0;
`
const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 330px;
  height: 160px;
  background: #c4c4c4;
  border-radius: 15px;
  margin: 0 auto;
  object-fit: cover;
`
const Description = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin: 15px 0 20px 0;
`
const Tools = styled.p`
  font-style: italic;
  font-size: 14px;
  color: #ffffff;
  margin: 0;
`

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={project.url} target="_blank">
      <GlobalDiv>
        <Title>
          <H2>
            <Dash />
            {project.type}
          </H2>
          <H1>{project.name}</H1>
        </Title>
        <Img alt={project.alt} src={project.src} />
        <Description>{project.description}</Description>
        <Tools>{project.tools}</Tools>
      </GlobalDiv>
    </Link>
  )
}

export default ProjectCard
