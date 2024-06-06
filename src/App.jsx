// ceci est un composant react
import Post from "./components/Post";

// un composant react est une fonction qui retourne du jsx
function App() {
  return (
    <main>
      <Post author="Emmanuel" body="React.js is awesome!" />
      <Post author="Paul" body="Check out the full course!" />
    </main>
  );
}

export default App
