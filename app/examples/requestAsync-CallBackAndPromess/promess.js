// Les promesses (async et await)
// Objet qui représente l'état d'une opération asynchrone
// En cours / Honorée / Rompue
// Exemple : Discord(), app de discussion en ligne, permet de parler aussi par micro. Utilise l'asynchrone pour ne pas bloquer tant que vous n'acceptez pas l'utilisation du micro.

// const promesse = new Promise((resolve, reject) => {
//   // Tâches asynchrones

//   // Promesse honorée : appel de resolve()

//   // Promesse rompue : appel de reject()
// });

// Mais généralement, nous ne créerons presque jamais de promesse, car les API modernes qu'on pourrait utiliser les ont déjà créées pour nous. Elles renvoient donc souvent un objet promesse en résultat qu'on utilisera pour savoir si tout s'est bien passé.

function chargerScript(script) {
	return new Promise((resolve, reject) => {
		let element = document.createElement("script");
		element.src = script;
		document.head.append(element);
		element.onload = () => resolve("Fichier " + script + " chargé");
		element.onerror = () =>
			reject(
				new Error("Operation impossible pour le script " + script)
			);
	});
}
// const promesse = chargerScript('test.js');

// // Renvoi une erreur car le fichier test.js n'existe pas
// promesse.then(
//   function(result) {
//     console.log(result);
//   },
//   function(error) {
//     console.log(error);
//   }
// );

// promesse.then(result => console.log(result), error => console.log(error)); // Même code, avec des fonctions fléchées

// On peut aussi passer directement par la fonction elle-même
chargerScript("test.js").catch(console.log);
