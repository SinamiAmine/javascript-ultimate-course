class Guerrier {
	constructor(pseudo) {
		super((pseudo, "guerrier", 350, 50));
	}

	attaquer(personnage) {
		personnage.santé -= this.attaque;
		console.log(
			this.pseudo +
				" attaque " +
				personnage.pseudo +
				" avec son épée (" +
				this.attaque +
				" dégâts)"
		);

		this.evoluer();
		personnage.verifierSante();
	}

	coupSpecial(personnage) {
		personnage.sante -= this.attaque * 5;
		console.log(
			this.pseudo +
				" attaque avec son coup spécial haches de guerre " +
				personnage.pseudo +
				" (" +
				this.attaque * 5 +
				" dégâts)"
		);
		personnage.verifierSante();
	}
}
