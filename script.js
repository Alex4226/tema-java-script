const prompt = require('prompt-sync')();


function divizibil(x){
  if(x % 10 == 0)
    console.log("Adevarat");
  else
    console.log("Fals");
}

let numar = prompt("Numar: ");
divizibil(numar);

console.log("----------------------------------------");

function tellFortune(n, z, y, x){
  console.log(`Vei fi un ${x} in ${y}, casatorit cu ${z} si vei avea ${n} copii.`);
}

let n = prompt("Numar Copii: ");
let z = prompt("Nume Partener: ");
let y = prompt("Locatie Geografica: ");
let x = prompt("Loc de Munca: ");

tellFortune(n, z, y, x);

console.log("----------------------------------------");

function ziua_saptamanii(z){
  switch(z){
    case "1":
      console.log("Luni");
      break;
    case "2":
      console.log("Marti");
      break;
    case "3":
      console.log("Miercuri");
      break;
    case "4":
      console.log("Joi");
      break;
    case "5":
      console.log("Vineri");
      break;
    case "6":
      console.log("Sambata");
      break;
    case "7":
      console.log("Duminica");
      break;
    default:
      console.log("Ziua saptamanii nu exista");
      break;
  }
}

let zi = prompt("Ziua saptamanii de la 1 la 7: ");
ziua_saptamanii(zi);