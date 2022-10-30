// Todo : Sélectionner un élément avec jQuery et JavaScript

// Avec JavaScript
document.querySelector("h1");
document.querySelectorAll("p");

// Avec jQuery
$("h1"); // on donne le sélecteur CSS
$("p"); // on sélectionne tous les paragraphes

// Todo :Modifier le contenu d'un élément avec jQuery et JavaScript

// Avec JavaScript
document.querySelector("h1").textContent = "Bonjour avec JavaScript";
// document.querySelectorAll('p').textContent = 'Ceci est un paragraphe'; impossible
document.querySelector(".maClass").innerHTML = "<p><b>HTML modifié</b></p>";

// Avec jQuery
$("h1").text("Bonjour avec jQuery");
// $('p').text('Ceci est un paragraphe');
$(".maClass").html("<p><b>HTML modifié avec jQuery</b></p>");

// Todo : Modifier le style d'un élément avec jQuery et JavaScript

// Avec JavaScript
document.querySelector("h1").style.color = "orange";
document.querySelector("h1").style.color; // renvoie la valeur de color
document.querySelector("#monId").className = "important";
// Supprimer une seule classe sans supprimer les autres ? Impossible
// document.querySelectorAll('p').style.color = 'green'; // ne fonctionne pas

// Avec jQuery
$("h1").css("color", "orange");
$("h1").css("color"); // renvoie la valeur de color
$("#monId").addClass("important"); // ajoute une classe
$("#monId").removeClass("important"); // supprime une classe
$("p").css("color", "green");

// Todo : Ajouter et supprimer un élément avec jQuery et JavaScript

// Avec JavaScript
document.querySelector("h1").prepend("Oh : ");
document.querySelector("h1").append(" !");
document.querySelectorAll("p");

// Avec jQuery
$("h1").before("<div>Hello</div>"); // Ajoute un élément avant
$("h1").after("<div>World</div>"); // Ajouter un élément après
$("h1").prepend("Oh : "); // Ajouter un élément devant
$("h1").append(" !"); // Ajouter un élément derrière
$("p").remove();

// Todo : Modifier les attributs d'un élément

// Avec JavaScript
document.querySelector("h1").getAttribute("class");
document.querySelector("h1").setAttribute("style", "text-transform: lowercase");
document.querySelectorAll("p");

// Avec jQuery
$("h1").attr("class"); // sélectionne un attribut
$("h1").attr("style", "text-transform: lowercase"); // ajoute ou modifie un attribut
$("h1").after('<a href="https://wikipedia.com">Wikipedia</a>');
$("a").attr("href", "https://believemy.com");
$("p");

// Todo : Ajouter des évènements

// Avec JavaScript
// document.querySelector('h1').addEventListener('click', () => {
//   document.querySelector('h1').style.color = 'orange';
// });
// for(let i = 0; i < 2; i++) {
//   document.querySelectorAll('p')[i].addEventListener('click', () => {
//     document.querySelector('h1').style.color = 'orange';
//   });
// }

// Avec jQuery
// $('h1').click(() => {
//   $('h1').css('color', 'orange');
// });

$("p").click(() => {
	$("h1").css("color", "orange");
});

// Pour utiliser les mêmes évènements JavaScript (plus facile)
$("h1").on("mouseover", () => {
	$("#monId").addClass("important");
});

// Todo : Faire une requête AJAX
// let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
// requete.open('GET', url); // Nous récupérons juste des données
// requete.responseType = 'json'; // Nous attendons du JSON
// requete.send(); // Nous envoyons notre requête

// // Dès qu'on reçoit une réponse, cette fonction est executée
// requete.onload = function() {
//    if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         // console.log(reponse);
//         let temperature = reponse.main.temp;
//         let ville       = reponse.name;
//         // console.log(temperature);
//         document.querySelector('#temperature_label').textContent = temperature;
//         document.querySelector('#ville').textContent = ville;
//       }
//       else {
//         alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
// }

const url = "https://blockchain.info/ticker";

$.ajax({
	url: url,
	type: "GET",
	dataType: "json",
	success: (data) => {
		// console.log(data);
		$("h1").text(data.EUR.last + " euros");
	},
	error: () => {
		alert("Merci de revenir plus tard.");
	},
});

const url_bis = "https://lesoublisdelinfo.com/api.php";

$.ajax({
	url: url_bis,
	type: "POST",
	data: "prenom=John",
	dataType: "json",
	success: (data) => {
		$("#monId").text(data.resultat);
	},
	error: () => {
		alert("Merci de revenir plus tard.");
	},
});

//Todo : Ajouter des animations
$("h1").hide();
$("h1").show();

// Ne retenez pas tout, comprenez juste comment ça fonctionne, internet est fait pour les développeurs

$("p").click(() => {
	// $('h1').toggle();
	// $('h1').fadeOut(); // ou fadeIn()
	// $('h1').fadeToggle();
	// $('h1').slideToggle();
	// $('h1').animate({
	//   opacity: .7, // seulement les propriétés qui ont une valeur numérique
	//   margin: 30
	// });
	$("h1").slideUp().slideDown().animate({ opacity: 0.7, margin: 30 });
	// ...
});
