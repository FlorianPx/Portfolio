import './App.css'
import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { Skills } from 'components/skills/Skills'
import { Projects } from 'components/projects/Projects'
import { Contact } from 'components/contact/Contact'
import { Notification } from 'components/Notification'

import GlobalStyle from './GlobalStyle'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Notification />
    </div>
  )
}

export default App
