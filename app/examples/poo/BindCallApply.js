// Call et Apply permettent d'invoquer immédiatement une fonction
// Animal.call(this (l'objet en cours), nombreDePattes, poids)

// Call = Apply
var gandalf = { titre: "Magicien" };
function direBonjour() {
    console.log("Bonjour " + this.titre);
}
// direBonjour.call(gandalf);

// Apply != Call
var gandalf = { titre: "Magicien" };
// let arme = ['un bâton', 75];

function direBonjour(arme, degats) {
    console.log("Bonjour " + this.titre + ", vous possédez " + arme + " qui donne " + degats + " points de dégats.");
}

// direBonjour.apply(gandalf, arme);
// direBonjour.call(gandalf, arme[0], arme[1]); // La seule différence : apply accepte les arguments nécessaire sous forme de tableau, à l'inverse call par variables

// Bind
// Objectif : Créer une nouvelle fonction, avec le même contexte et les mêmes propriétés que la fonction en paramètre (permet de changer le this)
// Surtout utilisé avec les fonctions anonymes à l'intérieur d'un objet

this.valeur = "Window";

let monObjet = {
    valeur: "Objet",
    getValeur: function() {
        console.log(this.valeur);
    }
}

monObjet.getValeur();

let maValeur = monObjet.getValeur;
maValeur(); // Window, car console.log(this.valeur) fait référence à l'objet global

// Pour corriger ce problème, on utilise bind, qui va récrer une fonction avec le contexte de l'objet monObjet

// let maValeurAvecBind = maValeur.bind(monObjet); // ici, on "prend" le contexte de base
let maValeurAvecBind = monObjet.getValeur.bind(monObjet); // Fait la même chose
maValeurAvecBind();