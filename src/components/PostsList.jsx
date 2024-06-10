import { useState, useEffect } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList ({isPosting, onStopPosting}) {
  // enregistrer les posts creer dans un tableau puis les afficher
  // [] : tableau vide
  const [posts, setPosts] = useState([]); // [posts, setPosts] = [etat, setter function]

  /* 
    Comment afficher les posts dans la bd au premier lancement de la page?

    on peut utiliser la fonction fecth pour le faire comme ceci:
    fetch('http:localhost:8090/posts').then(Response => Response.json()).then(data => {setPosts(data.post);}); 

    Mais il y aura un probleme car fetch retourne une promesse qui va de 
    nouveau reexecuter la fonction Postlist qui elle reexecutera le feetch pour la reponse et ainsi de suites. ce qui creera une boucle infinie

    Comment eviter cela???

    pour resoudre ce probleme, on utilisera le react hook: useEffect qui a des 'dependencies'. ces 'dependencies' seront declarees hors de la fonction fetch et parametrees de telle sorte que le fetch ne soit execute qu'au load de la page et egalement lorsque le parametre array de useEffect recevra une nouvelle valeur cad loraqu'un nouveau post sera cree

    le 'empty array' signifie que useEffect n'a aucune 'dependencies' et dans ce cas, le fetch n'est execute qu'une seule fois
  */

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8090/posts')
      const resData = await response.json();
      setPosts(resData.posts);  // posts : cle de l'objet json au niveau du backend
    }

    fetchPosts();
  }, []);

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
      {isPosting && 
      <Modal onClose={onStopPosting}>
        <NewPost 
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
        />
      </Modal>} 
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
    </>
  );
}

export default PostsList;