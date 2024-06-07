import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList ({isPosting, onStopPosting}) {
  // enregistrer les posts creer dans un tableau puis les afficher
  // [] : tableau vide
  const [posts, setPosts] = useState([]); // [posts, setPosts] = [etat, setter function]

  // ajouter un post
  function addPostHandler(postData) {
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