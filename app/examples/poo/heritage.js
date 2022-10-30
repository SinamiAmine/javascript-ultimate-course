//Grace le prototype on fait l'heritage
//Structure sans Héritage () en tant que developer on ne veut pas répeter le code

//Oiseau(nombreDePates,poids / longueurDesAiles)
function Oiseau(longueurDesAiles){
    this.nombreDePates = nombreDePates;
    this.poids = poids;
    this.longueurDesAiles = longueurDesAiles;
}

//Mammifere (nombreDePates,poids / typeDePoils)
function Mammifere(typeDePoils){
    this.nombreDePates = nombreDePates;
    this.poids = poids;
    this.typeDePoils = typeDePoils;
}

//Structure avec Héritage ()
// Constructeur de base
function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids         = poids;
}
Animal.prototype.presentation = function() {
    console.log('Cet animal possède ' + this.nombreDePattes + ' pattes et fait ' + this.poids + '.');
}

// Constructeurs spécialisés
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids); // La fonction Call() permet d'appeler une fonction constructeur : en premier paramètre on donne l'objet actuel (this), ensuite, on donne les arguments pour son constructeur
    this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype); // On change les informations en donnant un nouvel objet qui sera le prototype de notre constructeur animal
Oiseau.prototype.constructor = Oiseau; // On redéfinit la valeur de Oiseau.prototype.constructor car elle a été changée avec le changement de prototype

function Mammifere(nombreDePattes, poids, typeDePoils) {
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
}
Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere;

var perroquet = new Oiseau(2, '1kg', 'grandes');
console.log(perroquet);

perroquet.presentation();

