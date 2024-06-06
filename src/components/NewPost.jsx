import classes from './NewPost.module.css'

function NewPost(props) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
        {/* onChange se chargera d'appeler addeventlistener en arriere plan pour ecouter chaque changement dans la zone de texte le body qui se trouve dans PostsList en occurrence*/}
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"required onChange={props.onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;