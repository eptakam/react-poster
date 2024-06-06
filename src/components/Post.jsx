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

function Post(props){
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}
export default Post;