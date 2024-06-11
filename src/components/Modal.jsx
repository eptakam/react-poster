import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

// children est le contenu de la boite de dialogue modale cad le composant qui est enveloppe par le composant Modal
function Modal({ children }) {
  
  const navigate = useNavigate();

  function closeHandler() {
    // pour naviguer en utilisant l'element 'div', ici, nous allons utiliser un hook de react-router-dom 'useNavigate'. Mais nous aurons bien pu utiliser le composant 'Link' a la place du composant natif 'div'
    navigate('..'); // adressage relatif 
  }
  return (
    <>
      {/* 
        backdrop et modal sont exploites dans le fichier Modal.module.css
        au clic sur le backdrop (arriere plan de la boite de dialogue modale), on appelle la fonction closeHandler pour fermer la boite de dialogue modal 
      */}
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open="true" className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;