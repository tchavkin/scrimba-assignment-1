let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
}




//exercises:

console.log(4 + 5) //9
console.log("2" + "4") //24
console.log("5" + 1) //51
console.log(100 + "100") //100100

//let name = "Tara"
//let greeting = "Hi, my name is"
//let myGreeting = greeting + " " + name
//console.log(myGreeting)

//let username = "Tara"
//let message = "you have a message"
//console.log(message + ", " + username + "!")

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36
//let laptotal = lap1 + lap2 + lap3
//console.log(laptotal)
// ((or))
//function logLapTime() {
    //let totalTime = lap1 + lap2 + lap3
    //console.log(totalTime)
//}
//logLapTime()
// ((and))
//let lapsCompleted = 0
//function incrementLap() {
    //lapsCompleted = lapsCompleted + 1
//}
//incrementLap()
//incrementLap()
//incrementLap()

//function yomamma() {
//    console.log("so fine!")
//}
//yomamma()

//let myage = 35
//let humandogratio = myage * 7
//console.log(humandogratio)

//let count = 5
//count = count + 3
//count = count + 10
//count = count - 2
//console.log(count)

//let bonusPoints = 50
//bonusPoints = bonusPoints * 2 * .25 + 45
//console.log(bonusPoints)


 




