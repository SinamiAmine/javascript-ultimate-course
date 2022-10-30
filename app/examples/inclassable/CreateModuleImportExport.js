// Attention : impossible d'utiliser les modules si vous n'avez pas de serveur, la plupart des navigateurs bloquent les modules pour notre sécurité s'ils ne sont pas executés sur des serveurs
import { direBonjour } from './modules/direBonjour.js';


// modules/direBonjour.js
export direBonjour(prenom) {
  console.log('Bonjour ' + prenom);
}

// index.js
direBonjour('John'); // affiche 'Bonjour John'

// index.html
<script type="module" src="index.js"></script>