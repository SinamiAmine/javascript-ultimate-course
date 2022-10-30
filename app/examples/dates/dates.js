// 1er janvier 1970 à minuit UTC (londres)
let dateActuelle = new Date();
let dateEnSecondes = new Date(Date.now());
let datePrecise = new Date(2019, 11, 09, 22, 25);
// Au-dessus :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0

console.log(dateActuelle);
console.log(dateEnSecondes);
console.log(datePrecise);

//Getter & Setter Date
console.log(dateActuelle.getDay()); // jour de la semaine (0 pour dimanche, 6 pour samedi)
console.log(dateActuelle.getFullYear()); // année
console.log(dateActuelle.getDate()); // jour du mois

console.log(dateActuelle.getUTCDay());
// Renvoi la date pour l'heure UTC (donc de Londres)
// Les fonctions sont identiques, on ajoute simplement UTC

dateActuelle.setFullYear(2750);
console.log(dateActuelle.getFullYear());
//TODO : Transform Date to Format Local

// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure
// ON CHOISI LES OPTIONS QU'ON VEUT

console.log(navigator.language); //fr-FR
let dateLocale = dateActuelle.toLocaleString(navigator.language, {
	weekday: "long", // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
	year: "numeric", // numeric (xxxx), 2-digit (xx)
	month: "long", // short, narrow, long, numeric
	day: "numeric", // numeric, 2-digit
	hour: "numeric", // ...
	minute: "numeric",
	second: "numeric",
});

console.log(dateLocale);
//TODO: template string

// Avant
// let prenom = "John";
// let bonjour = "Bonjour " + prenom;
// console.log(bonjour);

// Maintenant
// let prenom = "John";
// let bonjour = `Bonjour ${prenom}`;
// console.log(bonjour);

// Avec les dates
// let date = new Date().getFullYear();
// let copyright = `${date} © Believemy`;
// console.log(copyright);

// Ou encore plus pratique : des calculs
let aliments = { fruits: 5, legumes: 1, biscuits: 75 };
let panier = `Dans votre panier, vous avez ${
	aliments.fruits + aliments.legumes + aliments.biscuits
} articles.`;
console.log(panier);
