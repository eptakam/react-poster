// ce fichier est le point d'entrée de l'application cad que c'est le premier fichier qui est exécuté

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost from './routes/NewPost.jsx';
import RootLayout from './routes/RootLayout.jsx';
import Posts from './routes/Posts.jsx';

/*
  Nous allons ajouter des urls pour: la page d'acceuil, un nouveau post, les details d'un post existant
*/

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    children: [
      { path: '/', 
        element: <Posts />, 
        children: [{ path: '/create-post', element: <NewPost />}], 
      }      
    ],
  },  // permet d'organiser la position des composants  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // l'element ayant pour id 'root' se trouve dans le fichier public/index.html
  
  // dire a react que le contenu rendu est en mode strict et doit etre afficher
  <React.StrictMode>
    
    <RouterProvider router={ router }/>   {/* router props: permet de configurer le RouterProvider pour qu'il fonctionne normalement cad qu'il sache l'url correspondant a chaque composant */}
  </React.StrictMode>,
)
