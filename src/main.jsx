import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Listagem from './pages/Listagem.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Listagem/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
