const UserValidation = (values) => {
  const errors = {};

  if (!values.annee || values.annee === "") {
    errors.annee = "L'annee doit être remplie";
  }

  if (!values.saison || values.saison === "") {
    errors.saison = "Le type doit être remplie";
  }

  if (!values.createur || values.createur === "") {
    errors.createur = "createur doit être remplie";
  }

  if (!values.gamme || values.gamme === "") {
    errors.gamme = "gamme doit être remplie";
  }

  if (!values.sex || values.sex === "") {
    errors.sex = "sex doit être remplie";
  }

  if (!values.modele || values.modele === "") {
    errors.modele = "marque doit être remplie";
  }

  if (!values.name || values.name === "") {
    errors.anme = "marque doit être remplie";
  }

  if (!values.mesure || values.mesure === "") {
    errors.mesure = "mesure doit être remplie";
  }

  if (!values.photo || values.photo === "") {
    errors.photo = "photo doit être remplie";
  }

  if (!values.commentaire || values.commentaire === "") {
    errors.commentaire = "commentaire doit être remplie";
  }

  return errors
};

export default UserValidation;
