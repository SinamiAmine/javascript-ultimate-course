// LocalStorage = Stocké dans le navigateur même après qu'il soit fermé
// SessionStorage = Stocké dans le navigateur pendant la session

// Et les cookies ?

// setItem[clé], [valeur]) / getItem[clé] / removeItem[clé]
// clear() : supprimer tout
// key([index]) : obtenir la clef située à l'index donnée
// length : obtenir le nombre d'éléments stockés

if (localStorage.getItem("prenom")) {
	document.body.append("Bonjour " + localStorage.getItem("prenom"));
} else {
	let prenom = prompt("Quel est votre prénom ?");
	localStorage.setItem("prenom", prenom);
	document.body.append("Bonjour " + prenom);
}
// localStorage.clear();
