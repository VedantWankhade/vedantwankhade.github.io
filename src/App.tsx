import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Layout from './components/Layout'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'

const App = () => (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='/' Component={ About } />
          <Route path='/projects' Component={ Projects } />
          <Route path='/skills' Component={ Skills } />
          <Route path='/experience' Component={ Experience } />
          <Route path='/contact' Component={ Contact } />
        </Routes>
      </Layout>
    </HashRouter>
  )

export default App
