// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if(block > 42){
    return block -42
  }
  else{
    return 42 - block
  }
}
function distanceFromHqInFeet(block){
  let distance = distanceFromHqInBlocks(block)
  console.log(distance)
  return distance * 264

 

 
}

function distanceTravelledInFeet(start,destination){
  const blockLength = 264;
  const blocksTraveled = Math.abs(destination - start);
  const distance = blocksTraveled * blockLength;
  return distance;







}

function calculatesFarePrice(start,destination){
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    const fare = (distance - 400) * 0.02;
    return fare;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
 
  






