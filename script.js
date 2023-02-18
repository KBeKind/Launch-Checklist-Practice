// Write your JavaScript code here!




window.addEventListener("load", function () {

    const form = document.querySelector("form");


    form.addEventListener("change", function (event) {

        const formInputs = form.querySelectorAll('input[type="text"]');

        for (let i = 0; i < formInputs.length; i++) {
            if (formInputs[i].value === "") {
                alert('All fields are required!');
                event.preventDefault();
                break;
            }
        };

  
        const faultyItemsList = document.getElementById("faultyItems");
        const pilotName = formInputs[0].value;
        const copilotName = formInputs[1].value;
        const fuelAmount = formInputs[2].value;
        const cargoMass = formInputs[3].value;

        const list = [];
        

        formSubmission(document, faultyItemsList, pilotName, copilotName, fuelAmount, cargoMass)


    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});