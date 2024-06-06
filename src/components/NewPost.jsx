// importer le react hook useState
// useState : is a React Hook
// React Hook : is a js function that lets you use state and other React features in function components
// they all begin by use and they most only execute in a React component or a custom Hook
// useState : is a function that returns an array with 2 elements
import { useState } from 'react';

import classes from './NewPost.module.css'

function NewPost(props) {
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

  function submitHandler(event) {
    // empecher le rechargement de la page en empechant la requete http par defaut du au submit
    event.preventDefault();

    // creer un objet post avec les valeurs des etats enteredBody et enteredAuthor
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    console.log(postData);
    onCancel(); // fermer le formulaire
  }

  return (
    // onSubmit se chargera d'appeler addeventlistener en arriere plan pour ecouter chaque soumission du formulaire
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        {/* onChange se chargera d'appeler addeventlistener en arriere plan pour ecouter chaque changement dans la zone de texte le body qui se trouve dans PostsList en occurrence*/}
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;