// importer le react hook useState
// useState : is a React Hook
// React Hook : is a js function that lets you use state and other React features in function components
// they all begin by use and they most only execute in a React component or a custom Hook
// useState : is a function that returns an array with 2 elements
import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList () {
  /*
  Note: useState() returns an array with 2 elements:
    stateData[0] // the current state value
    stateData[1] // the function that lets you update the state value (setter function)  
  */

  // initialiser l'etat enteredBody avec une chaine de caractere vide
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  // fonction a passer en parametre de l'evenement onChange
  function bodyChangeHandler(event) {
    // mettre a jour l'etat enteredBody avec la valeur de l'input
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    // mettre a jour l'etat enteredBody avec la valeur de l'input
    setEnteredAuthor(event.target.value);
  }

  return(
    <>
      <Modal>
        <NewPost 
          onBodyChange={bodyChangeHandler} 
          onAuthorChange={authorChangeHandler} 
        />
      </Modal>  
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Paul" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;