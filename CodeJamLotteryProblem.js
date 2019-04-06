function getCombinations(number){
  let counter=number;
  let combinations=[];
  while(counter!==0){
    let combination = [counter, number-counter];
    combinations.push(combination);
    counter--;
  }
  return combinations;
}

function checkIfContainsFour(number){
  let isFound=false;
  let Stringnumber=number.toString();
  for(let i=0;i<Stringnumber.length;i++){
    let digit=+Stringnumber.charAt(i);
    if(digit===4){
      isFound=true;
    }
  }
  return isFound;
}

const fs=require('fs');
let text=fs.readFileSync('./input.txt');
let inputs=text.toString().split("\n");
for(let i=0;i<inputs.length;i++){
    inputs[i]=inputs[i].trim();  
}
let inputCount=inputs[0];

for(let i=1;i<inputs.length;i++){
    let combinations=getCombinations(inputs[i]);
    var outputCount=1;
    combinations.forEach(array=>{
      if(checkIfContainsFour(array[0])===false && checkIfContainsFour(array[1])===false){
        if(outputCount===1){
            console.log(`case #${i}: ${array[0]} ${array[1]}`);
            outputCount++;
        }
      }
      
    })
}


