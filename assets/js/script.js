const totalNumbers = 5;

const randomNumbers = [];


let time = 5;


// -----------------------

const generateRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1 ) +min)
console.log(generateRandomNumber)

const outputMessages =  (outmessage, outnumbers) =>{
  document.getElementById("outmessage").innerHTML = outmessage;
  document.getElementById("outnumbers").innerHTML = outnumbers;
}
// ---------------------------


while(randomNumbers.length < totalNumbers){
  const newRandomNumber = generateRandomNumber(1, 30);
  if(!randomNumbers.includes(newRandomNumber)){
    randomNumbers.push(newRandomNumber)
  }
}
console.log(randomNumbers)


outputMessages(`Hai ${time} secondi per indovinare i seguenti numeri`, randomNumbers)

const countdown = setInterval(() => {
  outputMessages(`Hai ${--time} secondi per indovinare i seguenti numeri`, randomNumbers);
},1000);

setTimeout(() => {
  clearInterval(countdown)
  outputMessages("Hai una buona memoria?")
}, time * 1000)
