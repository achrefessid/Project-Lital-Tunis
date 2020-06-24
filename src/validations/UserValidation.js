const UserValidation = (values) => {
  const errors = {};

  if (!values.nom || values.nom === "") {
    errors.nom = "The nom must be filled in";
  }

  if (!values.type || values.type === "") {
    errors.type = "Type must be filled";
  }

  if (!values.collection || values.collection === "") {
    errors.collection = "Colection must be filled";
  }

  if (!values.marque || values.marque === "") {
    errors.marque = "Marque must be filled";
  }

  if (!values.reference || values.reference === "") {
    errors.reference = "Marque must be filled";
  }

  if (!values.phase || values.phase === "") {
    errors.phase = "Marque must be filled";
  }

  if (!values.mesure || values.mesure === "") {
    errors.mesure = "Marque must be filled";
  }

  if (!values.couleur || values.couleur === "") {
    errors.couleur = "Type must be filled";
  }

  if (!values.quantite || values.quantite === "") {
    errors.quantite = "Type must be filled";
  }

  if (!values.commentaire || values.commentaire === "") {
    errors.commentaire = "Type must be filled";
  }

  return errors
};

export default UserValidation;
