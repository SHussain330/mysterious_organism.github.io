// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}
//console.log(returnRandBase());
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
//console.log(mockUpStrand());
//A factory function is a function that returns an object and can be reused to make multiple object instances.
const pAequorFactory = (specimenNumber , arrayOfDNA) => {
  const obj = {
    specimenNumber: specimenNumber,
    arrayOfDNA: arrayOfDNA,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.arrayOfDNA.length);
      let newBase = returnRandBase();
      while(this.arrayOfDNA[randomIndex]=== newBase){
        newBase = returnRandBase();
        console.log(newBase);
      }
      this.arrayOfDNA[randomIndex] = newBase;
      
      return this.arrayOfDNA;
    },
    compareDNA(otherOrganism) {
      const similaritiesInDNA = this.arrayOfDNA.reduce((accumulator, currentValue, index, array) => {
        if(array[index] === otherOrganism.arrayOfDNA[index]){
          return accumulator +=1 ; 
        }
        else {
          return accumulator;
        }
      }, 0);
      const percentOfDNAshared = (similaritiesInDNA / this.arrayOfDNA.length) * 100;
      const percentageTo2Decimal = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimanNumber} and ${otherOrganism.specimanNumber} have ${percentageTo2Decimal}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrGBase = this.arrayOfDNA.filter(letter => letter === 'C' || letter === 'G');

      if (cOrGBase.length/this.arrayOfDNA.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    

    }

    }
  
  return obj;
}

//console.log(pAequorFactory(1 ,mockUpStrand()));
const instance1 = pAequorFactory(1 ,mockUpStrand());
//console.log(instance1.mutate());
//console.log(instance1.arrayOfDNA);
//console.log(instance1.specimenNumber);
const compareInstance1 = pAequorFactory(4 ,mockUpStrand());
const compareInstance2 = pAequorFactory(4 ,mockUpStrand());
//console.log(compareInstance1.arrayOfDNA);
const surviveArray = [];
let counter = 0;
while(surviveArray.length < 30){
  let newOrganism = pAequorFactory(counter , mockUpStrand());
  if(newOrganism.willLikelySurvive() === true){
    surviveArray.push(newOrganism);
  }
  counter ++ ;
}
console.log(surviveArray);










