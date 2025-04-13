import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import './styles/index.css'
import Home from './pages/Home'
import ExemploCards from './pages/ExemploCards'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/exemplo-cards' element={<ExemploCards />}/>
    </Routes>
  </HashRouter>
)
