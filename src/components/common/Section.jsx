import styled from 'styled-components'

import { devices } from '../../constants'

export const Section = styled.section`
  height: auto;
  padding: 20px;

  @media screen and (min-width: ${devices.tablet}px) {
    height: 100vh;
    padding: 0 40px;
  }
`
