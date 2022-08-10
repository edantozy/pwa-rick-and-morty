import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import RickAndMortyApp from './RickAndMortyApp'
import './styles.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RickAndMortyApp />
    </BrowserRouter>
  </React.StrictMode>
)

serviceWorkerRegistration.register()
reportWebVitals()
