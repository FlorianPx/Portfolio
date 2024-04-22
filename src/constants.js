import reactIcon from './assets/logos/reactIcon.png'
import reactIcon2x from './assets/logos/reactIcon2x.png'
import nodeIcon from './assets/logos/nodeIcon.png'
import nodeIcon2x from './assets/logos/nodeIcon2x.png'
import email from './assets/logos/mail.svg'
import github from './assets/logos/github.svg'
import linkedin from './assets/logos/linkedin.svg'
import lerevegourmand from './assets/images/lerevegourmand.png'
import studioPhoto from './assets/images/studioPhoto.png'
import motpourmot from './assets/images/motpourmot.png'
import portfolio from './assets/images/portfolio.png'
import immo from './assets/images/immo.png'

//Tests: Cypress, Jest.js

//Outils: MySQL, Workbench, Insomnia, Postman, VS Code, Git, Github, GitLab, Figma, CodeSandbox, Discord, Slack, Zoom, Google Workspace (Meet, Drive, Slides, Docs), Docker

export const cardArray = [
  {
    color: '#4C40F7',
    src: reactIcon,
    srcSet: `${reactIcon} 1x, ${reactIcon2x} 2x`,
    alt: 'Logo Front',
    title: 'Front',
    language: 'React et JavaScript',
    skills: [
      'Création de functional components',
      'Utilisation des hooks: useState, useEffect, useMemo, useContext',
      'Frameworks: React JS, jQuery, Twig',
      'Librairies: Redux, React Router, React Query, Axios, Mobiscroll, Nivo, Chart.js, Mapbox GL JS, Styled-components, Tailwind CSS',
    ],
  },
  {
    color: '#9D67F8',
    src: nodeIcon,
    srcSet: `${nodeIcon} 1x, ${nodeIcon2x} 2x`,
    alt: 'Logo Back',
    title: 'Back',
    language: 'Node.js et Express',
    skills: [
      "Création d'un serveur avec Express.js",
      "Création d'une base de données en SQL avec MySQL",
      "Création d'une API REST",
      'Utilisation de différents outils comme Workbench et Postman',
      'Utilisation de nodemon',
    ],
  },
]

export const projectArray = [
  {
    type: 'Web',
    name: 'Mot pour mot',
    src: motpourmot,
    alt: 'Représentation du projet "Mot pour mot"',
    description: 'Conception du site internet pour une officiante en cérémonie laïque',
    tools: 'React JS, Styled-components, WordPress Api, Figma',
    url: 'https://ceremonie-motpourmot.com/',
  },
  {
    type: 'Web app',
    name: '36h-immo',
    src: immo,
    alt: 'Représentation du projet "36h-immo"',
    description: "Développement d'une web application d'enchères immobilières",
    tools: 'Symfony (twig), React web component, vanilla JS, Tailwind CSS',
    url: 'https://www.36h-immo.com/',
  },
  {
    type: 'Web',
    name: 'Le Rêve Gourmand',
    src: lerevegourmand,
    alt: 'Représentation du projet "Le Rêve Gourmand"',
    description: 'Conception du site internet pour le food truck',
    tools: 'React JS, Styled-components, Figma',
    url: 'https://lerevegourmand.netlify.app/',
  },
  {
    type: 'Web',
    name: 'Portfolio',
    src: portfolio,
    alt: 'Représentation du projet "Portfolio"',
    description: "Développement de mon portfolio afin d'y exposer tous mes projets.",
    tools: 'React JS, Styled-components, Figma',
    url: 'https://florianpx.github.io/portfolio/',
  },
  {
    type: 'Web',
    name: 'Studio Photographie',
    src: studioPhoto,
    alt: 'Représentation du projet "Photographie"',
    description:
      'Refonte du site internet pour un studio photographe en équipe de 4 personnes durant 2 semaines.',
    tools: 'HTML 5, CSS, JavaScript',
    url: 'https://florianpx.github.io/studio-photographie/',
  },
]

export const contactArray = [
  {
    color: '#8E86FF',
    type: 'Email',
    items: [
      {
        logo: email,
        title: 'florianpoux@icloud.com',
        url: 'mailto:florianpoux@icloud.com',
      },
    ],
  },
  {
    color: '#BD96FF',
    type: 'Réseaux',
    items: [
      {
        logo: github,
        title: 'Github',
        url: 'https://github.com/FlorianPx',
      },
      {
        logo: linkedin,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/florian-poux/',
      },
    ],
  },
]

export const devices = {
  tablet: 930,
}
