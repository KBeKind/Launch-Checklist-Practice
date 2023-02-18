// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput = "") {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    return "Is a Number";
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    function haltLaunch() {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        clearToLaunch = false;
    }

    let clearToLaunch = true;
    const statusList = list.querySelectorAll('li');
    const launchStatus = document.getElementById("launchStatus");

    while (validateInput(pilot) !== "Not a Number"){
        pilot = prompt("Please enter a text name for the pilot.");
        alert("Pilot name has been updated.")
    }
    while (validateInput(copilot) !== "Not a Number"){
        copilot = prompt("Please enter a text name for the copilot.");
        alert("Co-pilot name has been updated.")
    }   
    while (validateInput(fuelLevel) !== "Is a Number") {
        fuelLevel = prompt("Please enter a numerical value for fuel level.");
        alert("Fuel level has has been updated.")
    }
    while (validateInput(cargoLevel) !== "Is a Number") {
        cargoLevel = prompt("Please enter a numerical value for cargo mass.");
        alert("Cargo mass has been updated.")
    }

    statusList[0].innerHTML = `Pilot ${pilot} Ready`;
    statusList[1].innerHTML = `Co-pilot ${copilot} Ready`;

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        statusList[2].innerHTML = `NOT ENOUGH FUEL! We have ${fuelLevel} liters and we need at least 10,000 liters.`;
        haltLaunch();
    }

    if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        statusList[3].innerHTML = `TOO MUCH MASS FOR TAKEOFF! We need 10,000 kilograms or less.`;
        haltLaunch();
    }

    if (clearToLaunch) {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is ready for launch";
    }



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
