import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import {Route, Routes, HashRouter} from 'react-router-dom'
import Kanban from './kanban'

const rootElement = document.getElementById('root')
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
              <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
  </HashRouter>
        </React.StrictMode>
    )
}