import React from 'react'
import styled from 'styled-components'

import { projectArray } from '../../constants'
import { Section } from '../common/Section'
import { Title } from '../common/Title'

import ProjectCard from './ProjectCard'

const Wrapper = styled(Section)`
  height: auto;
`

const Cards = styled.div`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > a {
    margin: 0 40px;
  }
`

export const Projects = () => {
  return (
    <Wrapper>
      <Title>Projets</Title>
      <Cards>
        {projectArray.map((project, index) => (
          <ProjectCard key={`project_${index + project.name}`} project={project} />
        ))}
      </Cards>
    </Wrapper>
  )
}
