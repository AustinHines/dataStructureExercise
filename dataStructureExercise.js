//Data structure exercise

const jedi = [];
jedi[0] = "Luke";
jedi.push("Obi-Wan Kenobi");
jedi.unshift("Yoda");
console.log(jedi);
jedi[1];
console.log(jedi[1]);
// jedi.splice(2, 1);
// console.log(jedi);
jedi.pop();
console.log(jedi);
jedi.shift();
console.log(jedi);
//TWO
const sithLords = ["darthVader", "darthSidious", "darthMaul"] 

const imperialOfficers = ["Grand Moff Tarkin",  "Orson Krennic"];

const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

console.log(starWarsVillains.slice(0, 2));

const droids = {
    astromech: "r2d2",
    protocol: "C-3PO",
    assassian: "IG-88" 
};

console.log(droids["astromech"]);

console.log(droids.protocol);

droids.assassian = "IG-11";

//BONUS
console.log(starWarsVillains[0][6]);
console.log(sithLords.slice(-2, -1));

const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace",
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the sith"
    },
    {
        episodeFour: "A new hope",
        episodeFive: "The empire strikes back",
        episodeSix: "Return of the jedi"
    },
    {
        episodeSeven: "The force awakens",
        episodeEight: "The last jedi",
        episodeNine: "The rise of skywalker"
    }
];

starWarsMovies.splice(1, 0, "Solo", "Rouge One")
console.log(starWarsMovies);
