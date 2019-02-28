// Analyse technischer Hilfsmittel zur Sicherstellung der Qualität
const substantives = ["Analyse", "Implementierung", "Optimierung", "Performanceoptimierung"]
const adjectives = ["technischer", "dynamischer", "eleganter", "notwendiger", "hilfreicher"]
const nouns = ["Hilfsmittel", "Frameworks", "Softwareentwicklungstools", "Komponenten"]
const prepositions = ["für", "von", "wegen"]
const target = ["Lombok", "Primefaces", "SAF", "Hibernate", "Java", "Lambdaausdruecken"]


function randomInArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function kokolores() {
  let randSubstantive = randomInArray(substantives);
  let randAdjective = randomInArray(adjectives);
  let randNoun = randomInArray(nouns);
  let randPreposition = randomInArray(prepositions);
  let randTarget = randomInArray(target);
  let statement = `${randSubstantive} ${randAdjective} ${randNoun} ${randPreposition} ${randTarget}`;
  return statement;
}

module.exports = kokolores
