export type IsClicked = { $isClicked: boolean }
export type ShowNav = { $showNav: boolean }
export type HasBeenReadNotification = { $hasBeenReadNotification: string }
export type HasBeenClickBullet = { $hasBeenClickBullet: string }

type ContactItem = {
  url: string
  logo: string
  title: string
}

type ContactProps = {
  color: string
  type: string
  items: ContactItem[]
}

export type CardContactProps = {
  contact: ContactProps
}

type ProjectProps = {
  url: string
  type: string
  name: string
  alt: string
  src: string
  description: string
  tools: string
}

export type ProjectCardProps = { project: ProjectProps }

type CardProps = {
  color: string
  alt: string
  src: string
  srcSet: string
  title: string
  language: string
  skills: string[]
}

export type CardsProps = { card: CardProps }
