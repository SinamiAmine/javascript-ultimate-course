// Créer un cookie
document.cookie = "prenom=John";

// Afficher tous les cookies
// alert(document.cookie);

// Modifier un cookie
document.cookie = "prenom=Mark";

// Supprimer un cookie
document.cookie = "prenom=";

// Options

document.cookie = "prenom=John; path=/admin";
document.cookie = "prenom=John; path=/admin; domain=believemy.com";

let date = new Date(Date.now() + 31536000000);
date = date.toUTCString();
document.cookie =
	"prenom=John; path=/admin; domain=believemy.com; expires=" + date;

document.cookie =
	"prenom=John; path=/admin; domain=believemy.com; max-age=31536000000";

document.cookie =
	"prenom=John; path=/admin; domain=believemy.com; max-age=31536000000; secure";

//     Voici une fiche technique résumant l'ensemble des paramètres pour les cookies.

// path - Permet de préciser sur lequel répertoire (dossier) est disponible le cookie

// domain - Permet de préciser sur quel nom de domaine est disponible le cookie

// expires - Permet de donner une date UTC jusqu'à laquelle le cookie est disponible, après cette date, il expirera

// max-age - Se substitue à expires, permet de donner une durée en millisecondes jusqu'à laquelle le cookie est disponible. Après cette date, il expirera

// secure - Permet de n'autoriser l'utilisation du cookie que sur les sites sécurisés (https)

// L'erreur HttpOnly
// Pour créer un cookie, le serveur utilise une fonction qui possède, parfois, une option : httpOnly. Cette option interdit tout simplement la lecture / modification / suppression de ce cookie par JavaScript. Je vous rassure, si c'est vous qui programmez votre site, vous saurez à l'avance ce que vous faites. Mais il est bon de rappeler dans cette session que si vous mettez l'option httpOnly lorsque vous créez vos cookies via un autre langage de programmation (comme le PHP), votre cookie ne pourra pas être utilisé par JavaScript. Maintenant, vous le savez !
