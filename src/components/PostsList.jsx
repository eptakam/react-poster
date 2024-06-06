import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList ({isPosting, onStopPosting}) {
  
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
        />
      </Modal>} 
      <ul className={classes.posts}>
        <Post author="Paul" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;