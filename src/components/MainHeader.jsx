import { Link } from 'react-router-dom';

// importer des icons de react-icons
import { MdMessage, MdPostAdd } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        {/* pour faire le lien de navigation entre le button 'Newpost' et le formulaire modal pour la creation d'un nouveau post (la route '/create-post'), nous allons remplacer 'button' par la balise anchor 'a href="/create-post"' et enlever l'evenement onclick.
        ceci marche, mais on remarqu'au clic c'est comme si l'on chargeait la page a nouveau. ceci parce que toute la single page (SPA) est appelee entierement par le href (http request). Or nous avons juste besoin que l'url change et que juste le composant necessaire (NewPost) charge.
        Pour cela, nous aurons besoin du composant 'Link to="/create-post"' de 'react-router-dom' a la place de la balise anchor 'a href="/create-post"'
        */}
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18}/>
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;