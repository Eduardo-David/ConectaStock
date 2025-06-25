import React  from 'react'
import ReactDoom from 'react-dom/client'
import { App } from './App.jsx'
import './main.css'
import {BrowserRouter} from 'react-router-dom';


const root = ReactDoom.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='bg-blue-300 flex items-center justify-center h-screen'>
        <App/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)

