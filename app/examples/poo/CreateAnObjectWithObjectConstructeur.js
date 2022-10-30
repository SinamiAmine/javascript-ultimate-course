// class Utilisateur {
//   constructor(prenom, nom, email) {
//     this.prenom = prenom;
//     this.nom    = nom;
//     this.email  = email;
//   }

//   sePresenter() {
//     console.log("Je m'appelle " + this.prenom + ' ' + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email + ".");
//   }
// }

// var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
// mark.sePresenter();

class Animal {
	constructor(nombreDePattes, poids) {
		this.nombreDePattes = nombreDePattes;
		this.poids = poids;
	}

	presentation() {
		console.log(
			"Cet animal possède " +
				this.nombreDePattes +
				" pattes et fait " +
				this.poids +
				"."
		);
	}
}

class Oiseau extends Animal {
	constructor(nombreDePattes, poids, longueurDesAiles) {
		//Pour call le constuctor Animal
		super(nombreDePattes, poids);
		this.longueurDesAiles = longueurDesAiles;
	}

	voler() {
		console.log("L'oiseau vole !");
	}
}

var perroquet = new Oiseau(2, "1kg", "grandes");
// perroquet.presentation();
// perroquet.voler();
console.log(perroquet);
