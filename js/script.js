console.log("Hello world");
let titre = "un titre";
let auteur = "un auteur";
let synopsis = "un synopsis";
let dateDeSortie = "05/11/85";
let nombreDentree = "nombre d'entrée";


//création d'un objet film en json.
let filmJson = {
    titre: "un titre",
    auteur: "un auteur",
    synopsis: "un synopsis",
    dateDeSortie: "05/11/85",
    nombreDentree: 4000
};
// création d'un objet film avec un tableau.
/*let filmTab = [titre = "un titre", auteur = "un auteur", synopsis  = "un synopsis", dateDeSortie = "05/11/85",
nombreDentree = 4000];*/
let listFilms = [
    {
        titre: "un titre 1",
        auteur: "un auteur 1",
        synopsis: "un synopsis 1",
        dateDeSortie: "01/11/85",
        nombreDentree: 1000
    },
    {
        titre: "un titre 2",
        auteur: "un auteur 2",
        synopsis: "un synopsis 2",
        dateDeSortie: "02/11/85",
        nombreDentree: 2000
    },
    {
        titre: "un titre 3",
        auteur: "un auteur 3",
        synopsis: "un synopsis 3",
        dateDeSortie: "03/11/85",
        nombreDentree: 3000
    }
];

//console.log(listFilms.nombreDentree);
/*for (let i = 0; i < listFilms.length; i++) {
    console.log (listFilms[i].titre);
    
};
for (indextitre in listFilms) {
    
        console.log(listFilms[indextitre].titre);
        
    
};*/

console.log(listFilms[0].titre +" titre du film 1 avant modif");
console.log(" titre de tous les film");
listFilms.forEach(function (listFilms) {
    //listFilms.titre = "123 nous iront au bois";
    console.log(listFilms.titre );
});

console.log("changement de titre du film 1");
listFilms[0].titre = "123 nous iront au bois";
console.log("{"+listFilms[0].titre +"}  titre change du film 1");
console.log(listFilms[0].nombreDentree +" Nombre d'entree du film 1");
console.log();

let filmFilter = listFilms.filter(listFilms => listFilms.nombreDentree >= 1500);
console.log(filmFilter);
console.log();
const reducer = (accumulator, listFilms) => accumulator + listFilms.nombreDentree;
let nbrDentreeTotal = listFilms.reduce(reducer, 0);

console.log(`${nbrDentreeTotal} Nombre total d'entrée sans filtre`);
console.log();

let nbrDentreeFiltre = filmFilter.reduce(reducer,0);
console.log(`${nbrDentreeFiltre} Nombre total d'entrée avec filtre`);