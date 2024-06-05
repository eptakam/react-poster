// ce fichier est le point d'entrée de l'application cad que c'est le premier fichier qui est exécuté

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // l'element ayant pour id 'root' se trouve dans le fichier public/index.html
  
  // dire a react que le contenu rendu est en mode strict et doit etre afficher
  <React.StrictMode>
    <App />   {/*   composant react */}
  </React.StrictMode>,
)
