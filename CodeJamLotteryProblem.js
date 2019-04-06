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

let combinations=getCombinations(44);
combinations.forEach(array=>{
  if(checkIfContainsFour(array[0])===false && checkIfContainsFour(array[1])===false){
    console.log(array); 
  }
  else{
    return "combination cannot be found";
  }
})

