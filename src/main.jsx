import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SudukoProvider } from './context/sudukoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <SudukoProvider>
        <App />
   </SudukoProvider>
  

)
