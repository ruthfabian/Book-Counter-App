let count = 0;
let increase = document.getElementById("count-el");
let entries = document.getElementById("save-el")


function increment() {
  count += 1
  increase.textContent = count
  
}



function save() {
  let display = count + " - "
  entries.textContent += display
  increase.textContent = 0
  count = 0

  console.log(count)
}





// function increment() {
//   console.log("The button was clicked")
// }

// function number() {
//   console.log(42)
// }
// number()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function laps() {
//   sum = lap1 + lap2 + lap3
//    console.log(sum)
// }
//  laps()

// let lapsCompleted = 0

// function incrementLap() {
//  lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted)


// let firstName = "Ruth"
// let surName = "Fabian"
// let Name = firstName + " " + surName
// console.log(Name)

// 

// let myPoints = 3;

// function add3Points() {
//   myPoints += 3

// }
// add3Points()
// add3Points()
// add3Points()

// function remove1Point() {
//   myPoints -= 1
// }
// remove1Point()
// remove1Point()

// console.log(myPoints)



// let fisrtBatch = 5
// let secondBatch = 7
// let count = fisrtBatch * secondBatch
// console.log (count)

// myAge = 20;
// myDogRatio = 7;
// myDogAge = myAge * myDogRatio;
// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints= bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)