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
      <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
      </ul>
    </>
  );
}

export default PostsList;