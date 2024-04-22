import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ShowNav } from 'model'

import headLogo from '../assets/logos/head.png'
import headLogo2 from '../assets/logos/head@2x.png'
import surprisedLogo from '../assets/logos/surprised.png'
import surprisedLogo2 from '../assets/logos/surprised@2x.png'

const Nav = styled.div<ShowNav>`
  position: fixed;
  display: flex;
  visibility: ${props => (props?.$showNav ? 'visible' : 'hidden')};
  opacity: ${props => (props?.$showNav ? '1' : '0')};
  transition-property: opacity, visibility;
  justify-content: center;
  width: 100%;
  height: 64px;
  background: #232233;
`
const Link = styled.a`
  position: absolute;
`

export const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [showSuprisedFace, setShowSuprisedFace] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - 400) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    })
  })

  return (
    <Nav $showNav={showNav}>
      <Link href="#main">
        <img
          alt="Logo de Florian Poux"
          onMouseEnter={() => setShowSuprisedFace(true)}
          onMouseLeave={() => setShowSuprisedFace(false)}
          src={showSuprisedFace ? surprisedLogo : headLogo}
          srcSet={
            showSuprisedFace
              ? `${surprisedLogo} 1x, ${surprisedLogo2} 2x`
              : `${headLogo} 1x, ${headLogo2} 2x`
          }
        />
      </Link>
    </Nav>
  )
}
