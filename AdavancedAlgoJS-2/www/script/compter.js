// Quand il y a un load sur la fenêtre comme quand on submit
window.addEventListener("load", function () {

    //Fonction qui compte de i jusqu'à la limite donnée
    function compterFor(i, limite) {
      //Initialisation de la variable de sortie
      let res = "";
      //Tant que i est plus petit ou égale à limite, on concatène
      for (let j=i; j<=limite; j++){
          res += String(j) + " "; //Notre chaîne de caractère de retour qui contiendra notre comptage
      }
      //On retourne le résultat à l'appel de la fonction précédente jusqu'à revenir à l'appel premier
      return res;
    }

    //Fonction qui compte de i jusqu'à la limite donnée
    function compterWhile(i, limite) {
      //Initialisation de la variable de sortie
      let res = "";
      //Tant que i est plus petit ou égale à limite, on concatène
      while (i<=limite){
          res += String(i) + " "; //Notre chaîne de caractère de retour qui contiendra notre comptage
          i++; //Itération de i
      }
      //On retourne le résultat à l'appel de la fonction précédente jusqu'à revenir à l'appel premier
      return res;
    }
    
    //Fonction récursive. Qui s'appel elle-même
    function compterRec(i, limite) {
      let res = "";
      //Tant que i est plus petit ou égale à limite, on concatène et on rappelle la fonction
      if (i <= limite){
        res = String(i) + " " + compterRec(++i, limite);
      }
      //On retourne le résultat à l'appel de la fonction précédente jusqu'à revenir à l'appel premier
      return res;
    }
      
    // On prend en charge l'événement submit du formulaire "myForm"
    document.forms['myForm'].addEventListener("submit", function (event) {
    event.preventDefault();
    document.forms['myForm'].elements['result'].value = "Compter avec une boucle For :\n" + compterFor(parseInt(document.getElementById("from").value),parseInt(document.getElementById("to").value));
    document.forms['myForm'].elements['result'].value += "\n\nCompter avec une boucle While :\n" + compterWhile(parseInt(document.getElementById("from").value),parseInt(document.getElementById("to").value));
    document.forms['myForm'].elements['result'].value += "\n\nCompter avec une fonction récursive :\n" + compterRec(parseInt(document.getElementById("from").value),parseInt(document.getElementById("to").value));

    }); 

  });