/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
film = [
    {
    Title: 'We',
    Director: 'Franc',
    Budget: '1000000000000',
}
]
const newArray= film.map(element => element.Budget);
if (newArray > 1000000000){
console.log('Budget is more then 1 mln USD');}
else{ console.log('Budget less then 1 mln USD');
}
console.log(newArray);