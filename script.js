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

// This is the Dormer

function getDormer() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.dormer.forEach(function(dormer) {
                output += `<option value="${dormer.measurement}">${dormer.measurement}</option>`;
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

function getDormerAccount() {

    document.getElementById("dormer-cal-btn").addEventListener("click", function() {

        let dormerArray = [];
        let dormerAmountArray = [];

        const grabDormerData = async() => {
            const response = await fetch('ventingCalData.json');
            const data = await response.json();
            dormerArray = data.dormer.map(itemDormer => itemDormer);
            dormerAmountArray = data.dormerAmount.map(itemDormerAmount => itemDormerAmount);
            var theDormerResult = document.getElementById("dormerData").value;
            var theDormerNumberResult = document.getElementById("dormerNumberData").value;
            dormerRes(theDormerResult, theDormerNumberResult);
        }
        grabDormerData();

        const dormerRes = (dormer, dormerAmount) => {
            let dormerResult = dormerArray.filter(itemDormer => itemDormer.measurement === dormer ? itemDormer : null);
            let dormerAmountResult = dormerAmountArray.filter(itemDormerAmount => itemDormerAmount.number === dormerAmount ? itemDormerAmount : null);

            console.log(dormerResult[0].value);

            var int = 144;
            var per = int - (int * .25);
            var cal = dormerResult[0].value * dormerAmountResult[0].value / per;
            var f = cal.toFixed(2);

            console.log(f);
            document.getElementById("venting-area-results-title").innerHTML = "Your total net free venting area (square feet): " + f;

            document.getElementById("venting-area-results-container").style.display = "block";
        }
    })
}
getDormerAccount();

// This is the Eave

function getEave() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.eave.forEach(function(eave) {
                output += `<option value="${eave.measurement}">${eave.measurement}</option>`;
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

function getEaveAccount() {

    document.getElementById("eave-cal-btn").addEventListener("click", function() {

        let eaveArray = [];
        let eaveAmountArray = [];

        const eaveDormerData = async() => {
            const response = await fetch('ventingCalData.json');
            const data = await response.json();
            eaveArray = data.eave.map(itemEave => itemEave);
            eaveAmountArray = data.eaveAmount.map(itemEaveAmount => itemEaveAmount);
            var theEaveResult = document.getElementById("eaveData").value;
            var theEaveNumberResult = document.getElementById("eaveNumberData").value;
            dormerRes(theEaveResult, theEaveNumberResult);
        }
        eaveDormerData();

        const dormerRes = (eave, eaveAmount) => {
            let eaveResult = eaveArray.filter(itemEave => itemEave.measurement === eave ? itemEave : null);
            let eaveAmountResult = eaveAmountArray.filter(itemEaveAmount => itemEaveAmount.number === eaveAmount ? itemEaveAmount : null);

            console.log(eaveResult[0].value);

            var int = 144;
            var per = int - (int * .25);
            var cal = eaveResult[0].value * eaveAmountResult[0].value / per;
            var f = cal.toFixed(2);

            console.log(f);
            document.getElementById("venting-area-results-title").innerHTML = "Your total net free venting area (square feet): " + f;

            document.getElementById("venting-area-results-container").style.display = "block";
        }
    })
}
getEaveAccount();

// This is the Ridge

function getRidge() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.ridge.forEach(function(ridge) {
                output += `<option value="${ridge.measurement}">${ridge.measurement}</option>`;
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

function getRidgeAccount() {

    document.getElementById("ridge-cal-btn").addEventListener("click", function() {

        let ridgeArray = [];
        let ridgeAmountArray = [];

        const ridgeData = async() => {
            const response = await fetch('ventingCalData.json');
            const data = await response.json();
            ridgeArray = data.ridge.map(itemRidge => itemRidge);
            ridgeAmountArray = data.ridgeAmount.map(itemRidgeAmount => itemRidgeAmount);
            var theRidgeResult = document.getElementById("ridgeData").value;
            var theRidgeNumberResult = document.getElementById("ridgeNumberData").value;
            ridgeRes(theRidgeResult, theRidgeNumberResult);
        }
        ridgeData();

        const ridgeRes = (ridge, ridgeAmount) => {
            let ridgeResult = ridgeArray.filter(itemRidge => itemRidge.measurement === ridge ? itemRidge : null);
            let ridgeAmountResult = ridgeAmountArray.filter(itemRidgeAmount => itemRidgeAmount.number === ridgeAmount ? itemRidgeAmount : null);

            console.log(ridgeResult[0].value);

            var int = 144;
            var per = int - (int * .25);
            var cal = ridgeResult[0].value * ridgeAmountResult[0].value / per;
            var f = cal.toFixed(2);

            console.log(f);
            document.getElementById("venting-area-results-title").innerHTML = "Your total net free venting area (square feet): " + f;

            document.getElementById("venting-area-results-container").style.display = "block";
        }
    })
}
getRidgeAccount();

// This is the Soffit

function getSoffit() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.soffit.forEach(function(soffit) {
                output += `<option value="${soffit.measurement}">${soffit.measurement}</option>`;
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

function getSoffitAccount() {

    document.getElementById("soffit-cal-btn").addEventListener("click", function() {

        let soffitArray = [];
        let soffitAmountArray = [];

        const soffitData = async() => {
            const response = await fetch('ventingCalData.json');
            const data = await response.json();
            soffitArray = data.soffit.map(itemSoffit => itemSoffit);
            soffitAmountArray = data.soffitAmount.map(itemSoffitAmount => itemSoffitAmount);
            var theSoffitResult = document.getElementById("soffitData").value;
            var theSoffitNumberResult = document.getElementById("soffitNumberData").value;
            soffitRes(theSoffitResult, theSoffitNumberResult);
        }
        soffitData();

        const soffitRes = (soffit, soffitAmount) => {
            let soffitResult = soffitArray.filter(itemSoffit => itemSoffit.measurement === soffit ? itemSoffit : null);
            let soffitAmountResult = soffitAmountArray.filter(itemSoffitAmount => itemSoffitAmount.number === soffitAmount ? itemSoffitAmount : null);

            console.log(soffitResult[0].value);

            var int = 144;
            var per = int - (int * .25);
            var cal = soffitResult[0].value * soffitAmountResult[0].value / per;
            var f = cal.toFixed(2);

            console.log(f);
            document.getElementById("venting-area-results-title").innerHTML = "Your total net free venting area (square feet): " + f;

            document.getElementById("venting-area-results-container").style.display = "block";
        }
    })
}
getSoffitAccount();


// This is the O'Hagin

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

function getOhaginAccount() {

    document.getElementById("ohagin-cal-btn").addEventListener("click", function() {

        let ohaginArray = [];
        let ohaginAmountArray = [];

        const ohaginData = async() => {
            const response = await fetch('ventingCalData.json');
            const data = await response.json();
            ohaginArray = data.ohagin.map(itemOhagin => itemOhagin);
            ohaginAmountArray = data.ohaginAmount.map(itemOhaginAmount => itemOhaginAmount);
            var theOhaginResult = document.getElementById("ohaginData").value;
            var theOhaginNumberResult = document.getElementById("ohaginNumberData").value;
            ohaginRes(theOhaginResult, theOhaginNumberResult);
        }
        ohaginData();

        const ohaginRes = (ohagin, ohaginAmount) => {
            let ohaginResult = ohaginArray.filter(itemOhagin => itemOhagin.profile === ohagin ? itemOhagin : null);
            let ohaginAmountResult = ohaginAmountArray.filter(itemOhaginAmount => itemOhaginAmount.number === ohaginAmount ? itemOhaginAmount : null);

            console.log(ohaginResult[0].value);

            var int = 144;
            var per = int - (int * .25);
            var cal = ohaginResult[0].value * ohaginAmountResult[0].value / per;
            var f = cal.toFixed(2);

            console.log(f);
            document.getElementById("venting-area-results-title").innerHTML = "Your total net free venting area (square feet): " + f;

            document.getElementById("venting-area-results-container").style.display = "block";
        }
    })
}
getOhaginAccount();


// This is the Turbine

function getTurbine() {
    fetch('ventingCalData.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<option class="top-option">Please Select Measurement</option>';
            data.turbine.forEach(function(turbine) {
                output += `<option value="${turbine.measurement}">${turbine.measurement}</option>`;
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


function getTurbineAccount() {

    document.getElementById("turbine-cal-btn").addEventListener("click", function() {

        let turbineArray = [];
        let turbineAmountArray = [];

        const turbineData = async() => {
            const response = await fetch('ventingCalData.json');
            const data = await response.json();
            turbineArray = data.turbine.map(itemTurbine => itemTurbine);
            turbineAmountArray = data.turbineAmount.map(itemTurbineAmount => itemTurbineAmount);
            var theTurbineResult = document.getElementById("turbineData").value;
            var theTurbineNumberResult = document.getElementById("turbineNumberData").value;
            turbineRes(theTurbineResult, theTurbineNumberResult);
        }
        turbineData();

        const turbineRes = (turbine, turbineAmount) => {
            let turbineResult = turbineArray.filter(itemTurbine => itemTurbine.measurement === turbine ? itemTurbine : null);
            let turbineAmountResult = turbineAmountArray.filter(itemTurbineAmount => itemTurbineAmount.number === turbineAmount ? itemTurbineAmount : null);

            console.log(turbineResult[0].value);

            var int = 144;
            var per = int - (int * .25);
            var cal = turbineResult[0].value * turbineAmountResult[0].value / per;
            var f = cal.toFixed(2);

            console.log(f);
            document.getElementById("venting-area-results-title").innerHTML = "Your total net free venting area (square feet): " + f;

            document.getElementById("venting-area-results-container").style.display = "block";
        }
    })
}
getTurbineAccount();