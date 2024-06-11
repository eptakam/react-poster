import { useState, useEffect } from 'react';

// 
import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

function PostsList () {
  const posts = useLoaderData();
  // enregistrer les posts creer dans un tableau puis les afficher
  // // [] : tableau vide
  // const [posts, setPosts] = useState([]); // [posts, setPosts] = [etat, setter function]
  // const [isFectching, setIsFetching] = useState(false);

  /* 
    Comment afficher les posts dans la bd au premier lancement de la page?

    on peut utiliser la fonction fecth pour le faire comme ceci:
    fetch('http:localhost:8090/posts').then(Response => Response.json()).then(data => {setPosts(data.post);}); 

    Mais il y aura un probleme car fetch retourne une promesse qui va de 
    nouveau reexecuter la fonction Postlist qui elle reexecutera le feetch pour la reponse et ainsi de suites. ce qui creera une boucle infinie

    Comment eviter cela???

    pour resoudre ce probleme, on utilisera le react hook: useEffect qui a des 'dependencies'. ces 'dependencies' seront declarees hors de la fonction fetch et parametrees de telle sorte que le fetch ne soit execute qu'au load de la page et egalement lorsque le parametre array de useEffect recevra une nouvelle valeur cad loraqu'un nouveau post sera cree

    le 'empty array' signifie que useEffect n'a aucune 'dependencies' et dans ce cas, le fetch n'est execute qu'une seule fois

    Important:
              Dans la realite, il y aura un temps avant que les donnees ne soient fecthees de la BD pour l'affichage.
              pendant ce temps il faut gerer l'affichage de telle sorte que l'utilisateur ne sache pas ce qui se passe
              en arriere plan en lui affichant un message texte, ou un spinner, etc.

              pour ce faire, nous allons utiliser une autre intance de useState pour pouvoir faire d'autres choses pendant ce moment. 
              elle sera mise au depart a false
  */

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     setPosts(resData.posts);  // posts : cle de l'objet json au niveau du backend
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // ajouter un post
  function addPostHandler(postData) {
    // inserer le nouveau post dans la BD au travers d'une requete http
    // 8090: port du serveur
    fetch('http://localhost:8090/posts', {
      method: 'POST',
      body: JSON.stringify(postData), // convertir l'objet en chaine de caractere (body : les donnees a envoyer)
      headers: {
        'Content-Type': 'application/json'
      }
    });

    /*
      postData : le nouveau post a ajouter
      ...prevPosts : les posts existants
    */
    setPosts((prevPosts) => [postData, ...prevPosts]); 
  }
  
  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost 
  //         onBodyChange={bodyChangeHandler} 
  //         onAuthorChange={authorChangeHandler} 
  //       />
  //     </Modal>
  //   );
  // }

  return(
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
        {/* 
          map : me permet de transformer mon array de post en posts de jsx element
          key : attribut unique pour chaque element
        */}
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
      </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'black'}}>
          <h2>No posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      
      )}

      {/* ceci sera affiche pendant le temps d'attente du fecth de la BD */}
      {/* {isFectching && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <p>Loading posts...</p>
        </div>)} */}
    </>
  );
}

export default PostsList;