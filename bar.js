const leeftijd = 30

if (leeftijd >= 18 &&  leeftijd <= 25) {
    console.log("U bent oud genoeg en mag de bar in, en u krijgt 50% korting");
} else if (leeftijd >= 18){

    console.log("U bent oud genoeg en mag de bar in")
} else {
    console.log("Je bent helaas nog te jong")
}

const isFemale = true
const vrouwenAvond = true

if (vrouwenAvond == false){

    console.log("Het is geen vrouwenavond, ook mannen mogen naar binnen")

} else if (isFemale) {
    console.log("U bent een vrouw en mag de bar in");
} else {
    console.log("Alleen vrouwen mogen de bar in")
}

const driverStatus = 'bob'

if (driverStatus == 'bob') {
    console.log("U mag naar huis rijden");
} else {
    console.log("u mag zelf niet naar huis rijden")
}

const firstName = 'Sarah'

if (firstName == 'Bram' || firstName == 'Sarah') {

    console.log("U krijgt een gratis biertje!")

}

const totalAmount = 100

if (totalAmount >= 25 && totalAmount <= 50) {

    console.log("U krijgt gratis (vega)bitterballen!")

} else if (totalAmount > 50 && totalAmount < 100) {

    console.log("U krijgt gratis een portie nachos!")

} else if (totalAmount >= 100) {

    console.log("U krijgt gratis een fles champagne!")

}