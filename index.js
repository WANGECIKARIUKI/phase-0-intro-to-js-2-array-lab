// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Garfiled) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift("Milo");
}
function appendCat() {
   return [...cats,"Broom"];
}
function prependCat() {
   return ["Arnold", ...cats];
}
function removeLastCat() {
   return cats.slice(0, -1);
}
function removeFirstCat() {
   return cats.slice(1);
}