import classes from './Modal.module.css';

// children est le contenu de la boite de dialogue modale cad le composant qui est enveloppe par le composant Modal
function Modal({ children , onClose}) {
  return (
    <>
      {/* 
        backdrop et modal sont exploites dans le fichier Modal.module.css
        au clic sur le backdrop (arriere plan de la boite de dialogue modale), on appelle la fonction onClose pour fermer la boite de dialogue modal 
      */}
      <div className={classes.backdrop} onClick={onClose}/>
      <dialog open="true" className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;