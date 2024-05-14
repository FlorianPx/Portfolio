import { HasBeenClickBullet, HasBeenReadNotification, IsClicked } from 'model'
import React, { useState } from 'react'
import styled from 'styled-components'

const BackgroundLogo = styled.div<IsClicked>`
  position: fixed;
  z-index: 2;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background-color: ${props => (props.$isClicked ? '#f86770' : '#ffffff')};
  cursor: pointer;
`
const NotificationBullet = styled.div<IsClicked & HasBeenClickBullet & HasBeenReadNotification>`
  display: ${({ $hasBeenClickBullet, $hasBeenReadNotification, $isClicked }) =>
    $isClicked
      ? 'none'
      : $hasBeenReadNotification && $hasBeenClickBullet === 'true'
        ? 'none'
        : 'flex'};
  position: absolute;
  left: 66%;
  top: 0%;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: #f86770;
`
const HasBeenReadBullet = styled.div<HasBeenClickBullet>`
  display: flex;
  height: 16px;
  width: 16px;
  margin: 0 8px;
  border-radius: 8px;
  background-color: ${({ $hasBeenClickBullet }) =>
    $hasBeenClickBullet === 'true' ? '#ececec' : '#f86770'};
  cursor: pointer;
`

const Content = styled.div<IsClicked>`
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
  height: 62px;
  width: ${({ $isClicked }) => ($isClicked ? '374' : '62')}px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 31px;
  transition: all 0.3s ease-in ${({ $isClicked }) => ($isClicked ? '0' : '0.2')}s;
  transition-property: width, padding;
`
const Paragraph = styled.p<IsClicked>`
  max-width: 280px;
  margin: 0;
  visibility: ${({ $isClicked }) => ($isClicked ? 'visible' : 'hidden')};
  opacity: ${({ $isClicked }) => ($isClicked ? '1' : '0')};
  transition: all 0.3s ease-in ${({ $isClicked }) => ($isClicked ? '0.2' : '0')}s;
  transition-property: opacity, visibility;
  cursor: pointer;
`
const Link = styled.a`
  color: currentColor;
`

export const Notification = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [hasBeenReadNotification, setHasBeenReadNotification] = useState(
    localStorage.getItem('hasBeenReadNotification')
  )
  const [hasBeenClickBullet, setHasBeenClickBullet] = useState(
    localStorage.getItem('hasBeenClickBullet')
  )

  const handleClick = () => {
    setIsClicked(!isClicked)

    if (!hasBeenReadNotification) {
      setHasBeenReadNotification('true')
      localStorage.setItem('hasBeenReadNotification', 'true')
    }
  }

  if (isClicked) {
    setTimeout(() => setIsClicked(false), 5000)
  }

  const handleChange = () => {
    if (!hasBeenClickBullet) {
      setHasBeenClickBullet('true')
      localStorage.setItem('hasBeenClickBullet', 'true')
    }
  }

  return (
    <>
      <BackgroundLogo $isClicked={isClicked} onClick={handleClick}>
        <NotificationBullet
          $hasBeenClickBullet={hasBeenClickBullet}
          $hasBeenReadNotification={hasBeenReadNotification}
          $isClicked={isClicked}
        />
        <svg fill="none" height="28" viewBox="0 0 24 28" width="24">
          <path
            d="M23.5381 19.8127C22.5031 18.6774 20.5665 16.9695 20.5665 11.375C20.5665 7.12578 17.6479 3.72422 13.7125 2.88969V1.75C13.7125 0.783672 12.9454 0 11.9993 0C11.0532 0 10.2861 0.783672 10.2861 1.75V2.88969C6.35073 3.72422 3.43216 7.12578 3.43216 11.375C3.43216 16.9695 1.49555 18.6774 0.460555 19.8127C0.139126 20.1655 -0.00337395 20.5871 -0.000695383 21C0.00519747 21.8969 0.694662 22.75 1.71895 22.75H22.2797C23.3039 22.75 23.9939 21.8969 23.9993 21C24.002 20.5871 23.8595 20.1649 23.5381 19.8127ZM3.61698 20.125C4.75377 18.5954 5.99663 16.0601 6.00252 11.4067C6.00252 11.3958 5.99931 11.3859 5.99931 11.375C5.99931 7.99203 8.68538 5.25 11.9993 5.25C15.3132 5.25 17.9993 7.99203 17.9993 11.375C17.9993 11.3859 17.9961 11.3958 17.9961 11.4067C18.002 16.0606 19.2448 18.5959 20.3816 20.125H3.61698ZM11.9993 28C13.8914 28 15.4263 26.4332 15.4263 24.5H8.57234C8.57234 26.4332 10.1072 28 11.9993 28Z"
            fill={isClicked ? '#ffffff' : '#1F1A30'}
          />
        </svg>
      </BackgroundLogo>
      <Content $isClicked={isClicked} onMouseEnter={handleChange}>
        <HasBeenReadBullet $hasBeenClickBullet={hasBeenClickBullet} />
        <Paragraph $isClicked={isClicked} onClick={handleChange}>
          Si mon profil suscite un intérêt, n'hésitez pas,{' '}
          <Link href="#contact">Contactez-moi !</Link>
          <span> 😁</span>
        </Paragraph>
      </Content>
    </>
  )
}
