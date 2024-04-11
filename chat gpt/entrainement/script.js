document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cliquez-btn');
    button.addEventListener('click', function() {
        alert('Vous avez cliqué');
    });
});
/*document.addEventListener('DOMContentLoaded', function() {
Cela écoute l'événement DOMContentLoaded sur le document, 
ce qui signifie que le script s'exécutera une fois que le DOM 
(Document Object Model) est complètement chargé et prêt à être manipulé.
const button = document.querySelector('.cliquez-btn');

Cela sélectionne le premier élément dans le document qui correspond au sélecteur CSS .cliquez-btn, qui est notre bouton. 
Il stocke cet élément dans la variable button.
button.addEventListener('click', function() {

Cela ajoute un écouteur d'événements de clic sur le bouton. 
Lorsque le bouton est cliqué, la fonction anonyme qui suit sera exécutée.
alert('Vous avez cliqué');

Cette ligne affiche une boîte de dialogue d'alerte avec le message 
"Vous avez cliqué" lorsque le bouton est cliqué.
});

Cette accolade ferme la fonction anonyme passée à addEventListener.
});

Cette accolade ferme la fonction passée à document.addEventListener('DOMContentLoaded', ...).
En résumé, ce code JavaScript attend que le document soit complètement chargé, sélectionne le bouton ayant la classe .cliquez-btn, 
ajoute un écouteur d'événements de clic à ce bouton, et affiche une boîte de dialogue d'alerte avec le message 
"Vous avez cliqué" lorsque le bouton est cliqué.*/