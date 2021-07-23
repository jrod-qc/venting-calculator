// This is the Venting Type
function getVentingType() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option value="" class="top-option">Please Select Measurement</option>';
            data.ventingTypes.forEach(function(ventingTypes) {
                output += `<option value="${ventingTypes.name}">${ventingTypes.name}</option>`;
            });
            document.getElementById('typeOfVentingData').innerHTML = output;
        })
}
getVentingType();


// This is the Choice
function typeOfVentingChoice() {
    var choiceOfVenting = document.getElementById("typeOfVentingData").value;
    if (choiceOfVenting === "Gable") {
        document.getElementById("gable-container").style.display = "flex";
        document.getElementById("dormer-container").style.display = "none";
        document.getElementById("eave-container").style.display = "none";
        document.getElementById("ridge-container").style.display = "none";
        document.getElementById("soffit-container").style.display = "none";
        document.getElementById("ohagin-container").style.display = "none";
        document.getElementById("turbine-container").style.display = "none";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    } else if (choiceOfVenting === "Dormer") {
        document.getElementById("gable-container").style.display = "none";
        document.getElementById("dormer-container").style.display = "flex";
        document.getElementById("eave-container").style.display = "none";
        document.getElementById("ridge-container").style.display = "none";
        document.getElementById("soffit-container").style.display = "none";
        document.getElementById("ohagin-container").style.display = "none";
        document.getElementById("turbine-container").style.display = "none";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    } else if (choiceOfVenting === "Eave") {
        document.getElementById("gable-container").style.display = "none";
        document.getElementById("dormer-container").style.display = "none";
        document.getElementById("eave-container").style.display = "flex";
        document.getElementById("ridge-container").style.display = "none";
        document.getElementById("soffit-container").style.display = "none";
        document.getElementById("ohagin-container").style.display = "none";
        document.getElementById("turbine-container").style.display = "none";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    } else if (choiceOfVenting === "Ridge") {
        document.getElementById("gable-container").style.display = "none";
        document.getElementById("dormer-container").style.display = "none";
        document.getElementById("eave-container").style.display = "none";
        document.getElementById("ridge-container").style.display = "flex";
        document.getElementById("soffit-container").style.display = "none";
        document.getElementById("ohagin-container").style.display = "none";
        document.getElementById("turbine-container").style.display = "none";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    } else if (choiceOfVenting === "SofFit") {
        document.getElementById("gable-container").style.display = "none";
        document.getElementById("dormer-container").style.display = "none";
        document.getElementById("eave-container").style.display = "none";
        document.getElementById("ridge-container").style.display = "none";
        document.getElementById("soffit-container").style.display = "flex";
        document.getElementById("ohagin-container").style.display = "none";
        document.getElementById("turbine-container").style.display = "none";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    } else if (choiceOfVenting === "O'Hagin") {
        document.getElementById("gable-container").style.display = "none";
        document.getElementById("dormer-container").style.display = "none";
        document.getElementById("eave-container").style.display = "none";
        document.getElementById("ridge-container").style.display = "none";
        document.getElementById("soffit-container").style.display = "none";
        document.getElementById("ohagin-container").style.display = "flex";
        document.getElementById("turbine-container").style.display = "none";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    } else if (choiceOfVenting === "Turbine") {
        document.getElementById("gable-container").style.display = "none";
        document.getElementById("dormer-container").style.display = "none";
        document.getElementById("eave-container").style.display = "none";
        document.getElementById("ridge-container").style.display = "none";
        document.getElementById("soffit-container").style.display = "none";
        document.getElementById("ohagin-container").style.display = "none";
        document.getElementById("turbine-container").style.display = "flex";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    } else {
        alert("Please Make A Choice");
        document.getElementById("gable-container").style.display = "none";
        document.getElementById("dormer-container").style.display = "none";
        document.getElementById("eave-container").style.display = "none";
        document.getElementById("ridge-container").style.display = "none";
        document.getElementById("soffit-container").style.display = "none";
        document.getElementById("ohagin-container").style.display = "none";
        document.getElementById("turbine-container").style.display = "none";
        var theTotalVal = document.getElementById("venting-area-results-container").style.display = "none";
        theTotalVal.value = 0;
    }
}

// This is the Gable
function getGable() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.gable.forEach(function(gable) {
                output += `<option value="${gable.measurement}">${gable.measurement}</option>`;
            });
            document.getElementById('gableData').innerHTML = output;
        })
}

getGable();

function getGableAmount() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Amount</option>';
            data.gableAmount.forEach(function(gableNumber) {
                output += `<option value="${gableNumber.number}">${gableNumber.number}</option>`;
            });
            document.getElementById('gableNumberData').innerHTML = output;
        })
}

getGableAmount();

// This is the Dormer

function getDormer() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.dormer.forEach(function(dormer) {
                output += `<option value="${dormer.value}">${dormer.measurement}</option>`;
            });
            document.getElementById('dormerData').innerHTML = output;
        })
}

getDormer();

function getDormerAmount() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Amount</option>';
            data.dormerAmount.forEach(function(dormerNumber) {
                output += `<option value="${dormerNumber.number}">${dormerNumber.number}</option>`;
            });
            document.getElementById('dormerNumberData').innerHTML = output;
        })
}

getDormerAmount();

// This is the Eave

function getEave() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.eave.forEach(function(eave) {
                output += `<option value="${eave.value}">${eave.measurement}</option>`;
            });
            document.getElementById('eaveData').innerHTML = output;
        })
}

getEave();

function getEaveAmount() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Amount</option>';
            data.eaveAmount.forEach(function(eaveAmount) {
                output += `<option value="${eaveAmount.number}">${eaveAmount.number}</option>`;
            });
            document.getElementById('eaveNumberData').innerHTML = output;
        })
}

getEaveAmount();

// This is the Ridge

function getRidge() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.ridge.forEach(function(ridge) {
                output += `<option value="${ridge.value}">${ridge.measurement}</option>`;
            });
            document.getElementById('ridgeData').innerHTML = output;
        })
}

getRidge();

function getRidgeAmount() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Amount</option>';
            data.ridgeAmount.forEach(function(ridgeAmount) {
                output += `<option value="${ridgeAmount.number}">${ridgeAmount.number}</option>`;
            });
            document.getElementById('ridgeNumberData').innerHTML = output;
        })
}

getRidgeAmount();

// This is the Soffit

function getSoffit() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.soffit.forEach(function(soffit) {
                output += `<option value="${soffit.value}">${soffit.measurement}</option>`;
            });
            document.getElementById('soffitData').innerHTML = output;
        })
}

getSoffit();

function getSoffitAmount() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Amount</option>';
            data.soffitAmount.forEach(function(soffitAmount) {
                output += `<option value="${soffitAmount.number}">${soffitAmount.number}</option>`;
            });
            document.getElementById('soffitNumberData').innerHTML = output;
        })
}

getSoffitAmount();


// This is the Soffit

function getOhagin() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.ohagin.forEach(function(ohagin) {
                output += `<option value="${ohagin.profile}">${ohagin.profile}</option>`;
            });
            document.getElementById('ohaginData').innerHTML = output;
        })
}

getOhagin();

function getOhaginAmount() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Amount</option>';
            data.ohaginAmount.forEach(function(ohaginAmount) {
                output += `<option value="${ohaginAmount.number}">${ohaginAmount.number}</option>`;
            });
            document.getElementById('ohaginNumberData').innerHTML = output;
        })
}

getOhaginAmount();


// This is the Turbine

function getTurbine() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.turbine.forEach(function(turbine) {
                output += `<option value="${turbine.value}">${turbine.measurement}</option>`;
            });
            document.getElementById('turbineData').innerHTML = output;
        })
}

getTurbine();

function getTurbineAmount() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Amount</option>';
            data.turbineAmount.forEach(function(turbineAmount) {
                output += `<option value="${turbineAmount.number}">${turbineAmount.number}</option>`;
            });
            document.getElementById('turbineNumberData').innerHTML = output;
        })
}

getTurbineAmount();



function getGableAccount() {

    document.getElementById("gable-cal-btn").addEventListener("click", function() {

        let gableArray = [];
        let gableAmountArray = [];

        const grabGableData = async() => {
            const response = await fetch('ventingCalData.json');
            const data = await response.json();
            gableArray = data.gable.map(itemGable => itemGable);
            gableAmountArray = data.gableAmount.map(itemGableAmount => itemGableAmount);
            var theGableResult = document.getElementById("gableData").value;
            var theGableNumberResult = document.getElementById("gableNumberData").value;
            testRes(theGableResult, theGableNumberResult);
        }
        grabGableData();

        const testRes = (gable, gableAmount) => {
            let gableResult = gableArray.filter(itemGable => itemGable.measurement === gable ? itemGable : null);
            let gableAmountResult = gableAmountArray.filter(itemGableAmount => itemGableAmount.number === gableAmount ? itemGableAmount : null);

            var int = 144;
            var per = int - (int * .25);
            var cal = gableResult[0].value * gableAmountResult[0].value / per;
            var f = cal.toFixed(2);

            console.log(f);
            document.getElementById("venting-area-results-title").innerHTML = "Your total net free venting area (square feet): " + f;

            document.getElementById("venting-area-results-container").style.display = "block";
        }
    })
}
getGableAccount();