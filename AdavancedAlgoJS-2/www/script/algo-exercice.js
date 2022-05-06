  /* 
  Exercice 1
  -- Transformer un tableau en chaîne de caractère --
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser la variable de sortie -> une chaîne de caractère
  3. Créer une boucle qui va de 0 jusqu'à la longueur du tableau
  4. Ajouter à la variable de sortie chaque case du tableau
  5. Retourner la variable de sortie
  */

  function tabToString(tab){ 
      let res = "";
      for (i =0; i < tab.length; i++){
          res +=tab[i] + " ";  
      }
      return res
  }

  /* 
  Exercice 2
  -- Transformer une chaîne de caractère en tableau --
  0. Regardez ce que fait la méthode "push"
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de sortie -> un tableau
  3. Créer une boucle qui va de 0 jusqu'à la longueur de la chaîne de caractère
  4. Ajouter chaque caractère à une case du tableau de sortie
  5. Retourner la variable de sortie
  */

  function stringToTab(str){
    let res = []
    for(let char of str){
      res.push(char)
    }
    return res
     
    
  }

  /* 
  Exercice 3
  -- Transformer un tableau en chaîne de caractère version rapide --
  0. Regardez ce que fait la méthode "concat"
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser une variable "resLeft" qui va être remplie avec la partie gauche du tableau
  3. Initialiser une variable "resRight" qui va être remplie avec la partie droite du tableau
  4. Initialiser une variable "j" qui va être égale à la longueur du tableau -1
  5. La boucle va parcourir le tableau à la fois depuis la droite et depuis la gauche.
     Pour se faire on va à chaque itération ajouter 1 ("i") à une variable soustraire 1 ("j") à l'autre.
     À créer donc une boucle qui commence à 0 et qui va jusqu'à "j" (qui diminuera de 1 à chaque itération)
  6. Dans la boucle, ajouter chaque case du tableau en partant du début à resLeft 
  7. Dans la boucle, tester si on est pas sur la même case avec "i" et "j"
  8. Si on est pas sur la même case, ajouter chaque case du tableau en partant de la fin resRight
     Attention au sens de l'ajout
  9. Décrémenter "j" 
  8. Quand la boucle est finie, on concatène resLeft et resRight et on retourne la valeur
  */

  function tabToStringFast(tab){
    let resLeft="", resRight = "";
    let j = tab.length-1;
    for (let i=0; i<=j; i++){
      resLeft += tab[i];
      if (i!=j){ resRight = tab[j] + resRight};
      j--;
    }
    return resLeft.concat(resRight);
  } 

  /* 
  Exercice 4
  -- Transformer une chaîne de caractère en tableau version rapide --
  0. Regardez ce que fait la méthode "unshift"
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser une variable "resLeft" qui va être remplie avec la partie gauche de la chaîne
  3. Initialiser une variable "resRight" qui va être remplie avec la partie droite de la chaîne
  4. Initialiser une variable "j" qui va être égale à la longueur de la chaîne -1
  5. La boucle va parcourir la chaîne à la fois depuis la droite et depuis la gauche.
     Pour se faire on va à chaque itération ajouter 1 ("i") à une variable soustraire 1 ("j") à l'autre.
     À créer donc une boucle qui commence à 0 et qui va jusqu'à "j" (qui diminuera de 1 à chaque itération)
  6. Dans la boucle, ajouter chaque caractère de la chaîne en partant du début à chaque case de resLeft 
  7. Dans la boucle, tester si on est pas sur le même caractère avec "i" et "j"
  8. Si on est pas sur le même caractère, ajouter chaque chaque caractère de la chaîne en partant 
     de la fin à chaque case de resRight. Attention à ajouter à chaque fois à la dernière case
  9. Décrémenter "j" 
  8. Quand la boucle est finie, on concatène resLeft et resRight et on retourne la valeur
  */

  function stringToTabFast(str){
    let resLeft = []
    let resRight = []
    let j = str.length - 1
    for(let i = 0; i <= j; i++){
      resLeft.push(str[i])
      if (i!=j){
        resRight.unshift(str[j])
      }
      j--;
    }
    return resLeft.concat(resRight)
  }

  /* 
  Exercice 5
  -- Transformer un tableau en chaîne de caractère version récursive --
  0. Regarder ce que fait la méthode "slice"
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser la variable de sortie
  3. On regarde si notre la longueur du tableau est plus grande que 0
  4. Si notre la longueur du tableau est plus grande que 0, on concatène à notre valeur de sortie
     la valeur de la première case du tableau avec le résultat de notre fonction qu'on rappel en lui 
     renvoyant un tableau avec la première case en moins
  5. On retourne le résultat concaténé 
  */

  function tabToStringRec(tab) {   
    let res = "";
    if (tab.length>0){
        res += tab[0] + tabToStringRec(tab.slice(1));
    }
    return res
    
  }

  /* 
  Exercice 6
  -- Transformer une chaîne de caractère en tableau version récursive --
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de sortie
  3. On regarde si la longueur de chaîne est plus grande que 0
  4. On ajoute à la variable de sortie, à la case suivante, le premier caractère de la chaine
  5. On concatène à notre valeur de sortie le résultat de notre fonction qu'on rappel en lui 
     renvoyant la chaine de caractère emputée de son premier caractère
  6. On retourne le résultat concaténé 
  */
  
  function stringToTabRec(str) {   
    let res= []
    if(str.length > 0){
      res.push(str[0])
      res = str.slice(0,1) + tabToStringRec(str.slice(1));
    }
    return res
    
  }

  
  /* 
  Exercice 7
  -- Chercher si un mot est un palindrome --
  0. On va comparer la première lettre avec la dernière, puis la seconde avec l'avant dernière, etc.
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de boucle "j" qui a comme valeur de départ la longuer de la chaîne
  3. Initialises la boucle avec comme condition que la boucle continue tant que la variable 
     qui s'incrémente "i" soit plus petite que celle qui se décrémente "j" (que les indices se rejoignent)
  4. Tester les caractères courant entre eux (1er avec dernier, 2nd avec avant dernier, etc.)
  5. Si le test trouve des valeurs différentes entre les deux caractères comparés, 
     alors on retourne "faux"
  7. On décrémente la variable "j" et incrémente "i" (automatique dans une boucle for pour cett dernière)
  6. Une fois la boucle terminée, on retourne "vrai" en dehors de la boulce
  */

  function isPalindrome(str){
    let j = str.length
    let char = str.slice('');
    for(let i = 0; i < j; i++){
      if (char [i] != char[j -1]){
        return false
      }
        j -= 1;
      }
      
      return true
  
  }

  /* 
  Exercice 8
  -- Chercher si un mot est un palindrome version recursive --
  0. On va comparer la première lettre avec la dernière, puis la seconde avec l'avant dernière, etc.
  1. La fonction reçoit en paramètre une chaîne de caractère, l'indice du caractère à gauche et l'indice
     du caractère à droite (on va sans cesse comparer ces deux caractère). Les valeurs par séfaut sont
     respectivement 0 et la longeur de la chaîne de caractère
  2. Tester si l'indice de gauche et celui de droite ne se sont pas rejoint ou dépassé
  3. Tester si le caractère de gauche et celui de droite sont égaux.
    3a. Si c'est le cas, continuer à chercher en relançant la fonction, en retournant son résultat,
        avec comme paramètre toujours la chaîne mais aussi l'indice de gauche augmenté de 1 et 
        l'indice de droite diminué de 1
    3b. Si les deux caractères sont différents, renvoyer "faux"
  4. En dehors du test, retourner "vrai" (cela veut dire qu'on aura soit lancé toutes les instructions,
     soit que gauche et droite se seront rejoint ou dépassé.)
  */

  function isPalindromeRecursif(str,left=0,right=str.length-1){
    if (str[left] <= str[right]){
      if (left === right){
        isPalindromeRecursif(str,++left,--right)
      }

      }
      else{
      return false
    }
    return true
  }
  /* 
  Exercice 9
  -- Chercher si un mot est un palindrome version recursive avec coupe de chaîne --
  0. On va à chaque fois comparer la première lettre avec la dernière. À chaque récursion, on va
     emputer la chaîne du premier et dernier caractère.
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Tester si la chaîne est vide ou à 1 de longueur (soit dès le départ on a un palindrome, soit
    à force de couper la chaîne et après avoir fait toute les comparaisons on a un palindrome)
  3. Si c'est le cas, on retourne "vrai" 
  4. Tester si le caractère le premier caractère de la chaîne est égal au dernier.
    4a. Si c'est le cas, continuer à chercher en relançant la fonction, en retournant son résultat,
        avec comme paramètre toujours la chaîne mais le premier et le dernier caractère en moins
    4b. Si les deux caractères sont différents, renvoyer "faux"
  */

  function isPalindromeRecursifSubString(str){
    if (str.length === 0 || str.length ===1 ){
      return true
    }
    if (str[0] === str[str.length-1]){
      let res;res = str.substring(1, str.length-1)
      isPalindromeRecursifSubString(res)

    }
    else{
    return false
  }
  return true
}

  /* 
  Exercice 10
  -- Inverser une chaîne de caractère en partant de la fin de celle-ci --
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. On initialise la variable de retour
  3. On initialise la boucle pour partir de la fin de la chaine et décrémenter de 1 jusqu'à 0
  4. À chaque pas de boucle, on conctène le caractère courant à notre variable de retour
  5. On retourne notre variable de retour en sortie de boucle 
  */

  function strInvertForEnd(str){
    let string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
    
  }

  /* 
  Exercice 11
  -- Fonction permettant d'échanger de place des caractère dans une chaîne grace à substring --
  1. La fonction reçoit en paramètre une chaîne de caractère et les indices des deux éléments à échanger
  2. On concatène différentes partie de la chaîne
    2a. On découpe la partie de gauche jusqu'au premier élément
    2b. On ajoute le second élément
    2c. On ajoute la partie de chaîne entre les deux éléments
    2d. On ajoute le premier élément
    2e. On ajoute la fin de chaîne à partir du second élément
  3. On retourne le tout concaténé à la sortie de la boucle
  */

  function swapStr(str, a, b){
    if (a == b) {
      return str;
    }

    if (b < a) {
      let temp = b;
      b = a;
      a = temp;
    }

    if (a >= str.length) {
      return str;

    }
    return str.substring(0, a) +
      str[b] +

      str.substring(a + 1, b) +

      str[a] +
      str.substring(b + 1);
  }
  

  /* 
  Exercice 12
  -- Fonction permettant d'inverser les lettres d'une chaîne de caractère en utilisant la fonction 
  précédente qui permet d'échanger des lettres --
  0. Cette fonction va prendre les caractères de gauche et ceux de droite et les échanger les uns avec
  les autres en allant vers le centre jusqu'à ce que la chaîne soit complétement inversée
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. On initialise la variable de l'indice de droite en lui affectant la longueur de la chaîne 
  3. On initialise la valeur de retour en lui affectant la valeur d'entrée de la fonction
  4. On initialise la boucle avec comme condition de sortie que l'indice de gauche rejoint l'indice de droite
  5. On affecte à la valeur de retour le résultat de notre fonction échangeant des lettres
  6. On décrémente la valeur de l'indice de droite 
  4. On retourne le résultat à la sortie de la boucle
  */

  function strInvertFor(str){
    let string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
    
  }

  /* 
  Exercice 13
  -- Fonction permettant d'échanger de place des valeurs dans un tableau --
  0. À savoir que les tableaux se comportent comme des variables publiques
  1. La fonction reçoit en paramètre un tableau et les indices des deux éléments à échanger
  2. On initialise une valeur temporaire en lui affectant la valeur se trouvant au premier indice
     dans le tableau
  3. On affecte à la case du tableau avec le premier indice la valeur de la case du tableau au second indice
  4. On affecte à la case du tableau avec le second indice la valeur de la variable temporaire
  5. Pas besoin de retourner de valeur car le tableau est directement affecté
  */

  function swap(tab, a, b){
    let start= tab[a]
    tab[a]= tab[b]
    tab[b]= start
  }

  /* 
  Exercice 14
  -- Fonction permettant d'inverser les cases d'un tableau avec leurs valeurs en utilisant la fonction 
  précédente qui permet d'échanger des cases de tableau avec leurs valeurs --
  0. Cette fonction va prendre les cases de gauche et celles de droite et les échanger les uns avec
  les autres en allant vers le centre jusqu'à ce que tout soit inversé
  1. La fonction reçoit en paramètre un tableau
  2. On initialise la variable de l'indice de droite en lui affectant la longueur du tableau
  3. On initialise la boucle avec comme condition de sortie que l'indice de gauche rejoint l'indice de droite
  4. On lance la fonction échangeant des cases
  5. On décrémente la valeur de l'indice de droite 
  6. On retourne le tableau qu'on a reçu en entrée de fonction
  */

  function tabInvertFor(tab){
    let right = tab.length
    for (let i = 0; i < right; i++) {
      swap(tab, i, right);
      right--

    
    }
    return tab;
  }

  /* 
  Exercice 15
  Commentez et expliquez la fonction suivante :
  */

  //la functin invert string en recursive qui a 4 valeurs en parametre 
  function strInvertRec(str,right=0,left=str.length-1,res="") {   
    //si le la partie droite est egale a la partie gauche du string
    if (right == left){
      //on concatene la variable de sortie avec la partie gauche du string
      res = res + str[left];
    }else{ //autrement on declare la variable du milieu "mid" et on concatene la partie droite
      //on declare la variable du milieu "mid" et on concatene la partie droite avec la fuction math.floor de la gauche moin la partie droit divise par 2
      let mid = right + Math.floor((left-right)/2);
      //la variable de sortie de la partie gauche est egale a la fuction recursive strInvertRec(str, right, mid, res);
      let resLeft = strInvertRec(str, right, mid, res);
      //la variable de sortie de la partie droite est egale a la fuction recursive en ajoutant une valeur a la variable mid strInvertRec (str, mid+1, left, res)
      let resRight = strInvertRec(str, mid+1, left, res);
      
      //si la lonugeur de la variable de sortie de la partie gauche est supp à 0
      if (resLeft.length > 0){
        //la variable de sortie est concatene avec la variable de sortie de la partie gauche
        res =  res + resLeft;
      }
      //si la lonugeur de la variable de sortie de la partie droite est supp à 0
      if (resRight.length > 0){
        //la variable de sortie est concatene avec la variable de sortie de la partie gauche
        res = resRight + res;
      }
    }    
    //retourne la variable de sortie  
    return res;
  }

  /*
  Exercice 16
  Tentez de faire un fonction d'inversion de chaîne récursive en utilisant la fonction de chaîne native
  substring
  */

  function strInvertRecSubstr(str) {
    if(str.length <= 1){
      return str;
     }
     else { 
      return str.charAt(str.length - 1) + str.charAt((str.substring(0, str.length - 1).length) - 1); 
    }
  }
    

  /*
  Exercice 17
  Faire des fonctions qui permettent de vérifier si une chaîne reçu en entrée est un palindrome ou non
  en utilisant les fonctions d'inversion de chaîne précédente. Une ligne avec un return suffit à chaque fois
  */

  //Avec strInvertRec
  function isPalindromeAgain(str){
    strInvertRec(str,right=0,left=str.length-1,res="")
    left--
    
  }

  //Avec strInvertFor
  function isPalindromeAgain2(str){
    strInvertFor(str)
    str--
    
  }

  //Avec tabInvertFor
  function isPalindromeAgain3(str){
    tabInvertFor(tab)
    tab--
    
  }

  //Avec strInvertRecSubstr
  function isPalindromeAgain4(str){
    strInvertRecSubstr(str)
    str--
  }

  //Avec strInvertForEnd
  function isPalindromeAgain5(str){
    strInvertForEnd(str)
    str--
  }

  /*
  Exercice 18
  Faites une fonction qui cherche la valeur minimum dans un tableau avec une boucle simple
  */

  function minimumFor(tab){
    let min = tab.length;
    minimum = tab[min-1];
    while (min--){
        if(tab[min] < minimum){
            minimum = tab[min]
        }
    }
    return minimum;

    
  }

  /*
  Exercice 19
  Faites une fonction qui cherche la valeur minimum dans un tableau avec une boucle avec deux indices
  pour parcourir le tableau depuis le début et la fin jusqu'à ce que les indices se rejoignent 
  (milieu du tableau). 
  */

  function minimumForTwoStep(tab){
    
  }

  /*
  Exercice 20
  -- Fonction permettant de chercher de manière récursive la valeur minimum dans un tableau --
  1. La fonction prend en paramètre un tableau, un indice (pour la partie droite du tableau) 
     ayant 0 comme valeur par défaut et un autre indice (pour la partie gauche du tableau) ayant 
     la longueur du tableau comme valeur par défaut
  2. On initialise la valeur de retour (le minimum) en lui affectant la valeur de la case du tableau 
     à l'indice de droite
  3. On test si l'indice de droite est toujours plus petit que celui de gauche (en ce cas les deux 
     indices ne se sont pas rejoins et on continue de chercher la valeur minimu)
  4. Si la valeur de retour (voir point 2) est plus petite ou égale à la valeur de la case du tableau 
     à l'indice de gauche :
     4a. On affecte à la valeur de retour le résultat de notre fonction récursive qui aura en paramètre
         le tableau, l'indice de droite, et l'indice de gauche décrémenté de 1
     4b. SINON on affecte à la valeur de retour le résultat de notre fonction récursive qui aura en 
         paramètre le tableau, l'indice de droite incrémenté de 1, et l'indice de gauche
  5. En dehors des conditions, on retourne la valeur de retour (le minimum)
  */
  
  //Cette fonction déplace notre pointeur de gauche à droite jusqu'à se fixer sur la valeur la plus petite
  function minimumRecursif(tab,right=0,left=tab.length-1){

  }

  /*
  Exercice 21
  Commentez le code suivant
  */

  function minimumRecursifTwoStep(tab,start=0,end=tab.length-1,min=tab[start]){
    
    //
    if (start < end) {
      //
      if ( (tab[start]<min) || (tab[end]<min) ) {
        //
        if (tab[start]<min) {
          //
          min = minimumRecursifTwoStep(tab,start+1,end-1,tab[start]);
        }else{ //
          min = minimumRecursifTwoStep(tab,start+1,end-1,tab[end]);
        }
      }else{ //
        min = minimumRecursifTwoStep(tab,start+1,end-1,min);
      }
    }

    //
    return min;

  }

  /*
  Exercice 22
  Commentez et expliquez le code suivant
  */

  //
  function minimumRecursifMath(tab, len=tab.length-1) {        
      if (len == 0){ //
      //
          return tab[0]; 
      }
      //    
      return Math.min(tab[len - 1], minimumRecursifMath(tab, len - 1));
  }

  /*
  Exercice 23
  1) Commentez et expliquez le code suivant
  2) Dessinez ou décrivez les différentes étapes afin que l'on voit ce qui se passe sur le tableau de
  départ : [1,43,98,723,-2,4,-28,17,45,13,-11,0,37,-23]
  */

  //
  function minimumRecursifDivideAndConquer(tab,start=0,end=tab.length-1) {
    //
    if ((end-start) < 2){
      //
      return ((tab[end]<tab[start]) ? tab[end] : tab[start]);
    }else{ //
      //
      let mid = Math.floor((end+start)/2); 
      //
      let minLeft = minimumRecursifDivideAndConquer(tab, start, mid);
      //
      let minRight = minimumRecursifDivideAndConquer(tab, ++mid, end);
      //
      return ((minLeft<minRight) ? minLeft : minRight);
    }
  }

  /*
  Exercice 24
  Faites une fonction qui permet de chercher le minimum ET le maximum dans un tableau
  Retournez un tableau de deux cases contenants ces deux valeurs
  Inspirez-vous des algos précédent
  */

  function minAndMaxRecDAC (tab,start=0,end=tab.length-1){

  }

  //Partie lançant les différents fonction et affichant leurs résultats 

  //Initialisation des variables
  let res = "";
  let t = ["J","e"," ","s","u","i","s"," ","u","n","e"," ","s","t","r","i","n","g"," ","m","a","i","n","t","e","n","a","n","t"];
  let s = "Je suis une string transformé en tableau";

  //Partie de transformation de tableau en String ou de string en tableau
  res += "Exercice 1 : "+tabToString(t)+"\n--\n";
  res += "Exercice 2 : ["+stringToTab(s)+"]\n--\n";
  res += "Exercice 3 : "+tabToStringFast(t)+"\n--\n";
  res += "Exercice 4 : ["+stringToTabFast(s)+"]\n--\n";
  res += "Exercice 5 : "+tabToStringRec(t)+"\n--\n";
  res += "Exercice 6 : ["+stringToTabRec(s)+"]\n--\n";

  //Partie Palindrome
  s ="repasser"; 
  res += "Exercice 7 : '"+s+"' est palindrome ? -> "+isPalindrome(s)+"\n--\n";
  s ="ressasser";
  res += "Exercice 7 : '"+s+"' est palindrome ? -> "+isPalindrome(s)+"\n--\n";
  s ="koala";
  res += "Exercice 8 : '"+s+"' est palindrome ? -> "+isPalindromeRecursif(s)+"\n--\n";
  s ="kayak";
  res += "Exercice 8 : '"+s+"' est palindrome ? -> "+isPalindromeRecursif(s)+"\n--\n";
  s ="turing";
  res += "Exercice 9 : '"+s+"' est palindrome ? -> "+isPalindromeRecursifSubString(s)+"\n--\n";
  s ="ada";
  res += "Exercice 9 : '"+s+"' est palindrome ? -> "+isPalindromeRecursifSubString(s)+"\n--\n";

  //Partie inversion de string ou de tableau
  s = "bons";
  res += "Exercice 10 : À l'envers, '"+s+"' s'écrit : "+strInvertForEnd(s)+"\n--\n";
  s = "rage";
  res += "Exercice 11 : si on inverse la première et troisième lettre à '"+s+"' ça donne : "+swapStr(s, 0, 2)+"\n--\n";
  s = "zen";
  res += "Exercice 10 : À l'envers, '"+s+"' s'écrit : "+strInvertFor(s)+"\n--\n";
  t = ["r","a","g","e"];
  //Regardez ce qu'il se passe dans la console
  console.log(t);
  swap(t, 0, 2);
  console.log(t);
  res += "Exercice 13 : si on inverse la première et 3ème case du tableau [r,a,g,e] ça donne :"+t+"\n--\n";
  t = ["é","c","a","r","t"];
  res += "Exercice 14 : à l'envers le tableau ["+t+"] donne : "+tabInvertFor(t)+"\n--\n";
  s = "saper";
  res += "Exercice 15 : À l'envers, '"+s+"' s'écrit : "+strInvertRec(s)+"\n--\n";

  //Partie recherche de minimum
  t = [1,43,98,723,-2,4,-28,17,45,13,-11,0,37,-23];
  res += "Exercice 18 : le plus petit chiffre dans le tableau ["+t+"] est : "+minimumFor(t)+"\n--\n";
  res += "Exercice 19 : le plus petit chiffre dans le tableau ["+t+"] est toujours : "+minimumForTwoStep(t)+"\n--\n";
  res += "Exercice 20 : le plus petit chiffre dans le tableau ["+t+"] est encore : "+minimumRecursif(t)+"\n--\n";
  
  //Partie recher de minimum et maximum
  res += "Exercice 24 : le plus petit et le plus grand chiffre dans le tableau ["+t+"] sont : "+minAndMaxRecDAC(t)+"\n--\n";
  
  //Affichage dans la textarea au chargement ou reload de la page
  window.addEventListener("load", function () {  
    document.forms['myForm'].elements['result'].value = res;
  });
  