class Utilisateur {
	constructor(prenom, nom, email) {
		this.prenom = prenom;
		this.nom = nom;
		this.email = email;
	}

	// Un getter (accesseur) permet de récupérer une propriété
	get nomComplet() {
		return this.prenom + " " + this.nom;
	}

	// Un setter (mutateur) permet de définir une propriété
	set nomComplet(valeur) {
		[this.prenom, this.nom] = valeur.split(" "); // split() divise une chaîne de caractère à partir d'un séparateur pour faire un tableau
	}

	sePresenter() {
		console.log(
			"Je m'appelle " +
				this.prenom +
				" " +
				this.nom +
				" et vous pouvez me contacter à l'adresse email " +
				this.email +
				"."
		);
	}
}

var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
console.log(mark.nomComplet);
mark.nomComplet = "Bill Gates";
console.log(mark.nomComplet);

// class Animal {
//   constructor(nombreDePattes, poids) {
//     this.nombreDePattes = nombreDePattes;
//     this.poids          = poids;
//   }

//   presentation() {
//     console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + ".");
//   }
// }

// class Oiseau extends Animal {
//   constructor(nombreDePattes, poids, longueurDesAiles) {
//     super(nombreDePattes, poids);
//     this.longueurDesAiles = longueurDesAiles;
//   }

//   voler() {
//     console.log("L'oiseau vole !");
//   }
// }

// var perroquet = new Oiseau(2, "1kg", "grandes");
// // perroquet.presentation();
// // perroquet.voler();
// console.log(perroquet);
