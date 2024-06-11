// const names = ['Emmanuel', 'Paul'];

// function Post(){
//   const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  
//   return (
//     <div>
//       <p>{chosenName}</p>
//       <p>React.js is awesome!</p>
//     </div>
//   );
// }

// export default Post;

// rendre le composant dynamique
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

function Post({ id, author, body }){
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}
export default Post;

