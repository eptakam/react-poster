// importer le react hook useState
// useState : is a React Hook
// React Hook : is a js function that lets you use state and other React features in function components
// they all begin by use and they most only execute in a React component or a custom Hook
// useState : is a function that returns an array with 2 elements
// import { useState } from 'react';
import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css'
import Modal from '../components/Modal';

function NewPost() {
  /*
  Note: useState() returns an array with 2 elements:
    stateData[0] // the current state value
    stateData[1] // the function that lets you update the state value (setter function)  
  */

  // initialiser l'etat enteredBody avec une chaine de caractere vide
  // const [enteredBody, setEnteredBody] = useState('');
  // const [enteredAuthor, setEnteredAuthor] = useState('');

  // fonction a passer en parametre de l'evenement onChange
  // function bodyChangeHandler(event) {
  //   // mettre a jour l'etat enteredBody avec la valeur de l'input
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   // mettre a jour l'etat enteredBody avec la valeur de l'input
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   // empecher le rechargement de la page en empechant la requete http par defaut du au submit
  //   event.preventDefault();

  //   // creer un objet post avec les valeurs des etats enteredBody et enteredAuthor
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor
  //   };
    

  //   // fermer le formulaire
  //   // onCancel(); 
  // }

  return (
    // le formulaire pour le nouveau doit etre modal cad etre affiche au-dessus de la main page. d'ou nous allons utiliser notre composant Modal pour envelopper (wrapper) les elements qui seront retournes

    <Modal>
      {/* onSubmit se chargera d'appeler addeventlistener en arriere plan pour ecouter chaque soumission du formulaire */}
      <Form method='post' className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name='body' required rows={3} />
          {/* onChange se chargera d'appeler addeventlistener en arriere plan pour ecouter chaque changement dans la zone de texte le body qui se trouve dans PostsList en occurrence*/}
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name='author' required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type='button'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

 // Nous allons extraire les donnees du formulaire pour les pousser a la BD et directement faire un fetch request pour prendre ces donnees et les afficher sans avoir besoin de faire des manipulations manuelles. pour cela, nous utiliserons l'extra fonction 'action' comme suit:
export async function action({request}) {
  // l'objet {request} n'est pas une donnee qui provient du formulaire mais elle est passee automatiquement par react-router et formData est une methode de cet objet

  // en executant cette methode, nous aurons acces a 'body' et 'author' qui sont les donnees provenant du formulaire que nous avons besoin

  // Note: on utilise .json() pour les réponses JSON, .formData() pour les réponses de formulaire

  // formData a une methode get par exemple: formData.get('body')

  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // ceci creera une paire cle:valeur dont les cles seront les attributs name des balises du formulaire: { body: '...', author: '...' }

  // inserer le nouveau post dans la BD au travers d'une requete http
    // 8090: port du serveur
    await fetch('http://localhost:8090/posts', {
      method: 'POST',
      body: JSON.stringify(postData), // convertir l'objet en chaine de caractere (body : les donnees a envoyer)
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return redirect('/'); // retourne le resultat de la fonction appelee
}