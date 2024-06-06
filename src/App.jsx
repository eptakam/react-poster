// ceci est un composant react
// import Post from "./components/Post";

// // un composant react est une fonction qui retourne du jsx
// function App() {
//   return (
//     <main>
//       <Post author="Emmanuel" body="React.js is awesome!" />
//       <Post author="Paul" body="Check out the full course!" />
//     </main>
//   );
// }

// export default App

// construire un post-list component
// import Post from "./components/Post";

import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

// un composant react est une fonction qui retourne du jsx
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App
