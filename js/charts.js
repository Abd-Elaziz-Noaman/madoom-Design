// ------------- Bar Charts --------------------------- //

var xValues = ["Driver1", "Driver2", "Driver3", "Driver4", "Driver5", "Driver6", "Driver7", "Driver8", "Driver9"]

var y1Values = [5, 10, 15, 20, 25, 30, 35, 40]

var y2Values = [50, 100, 150, 200, 250, 300, 350, 400]

// drivers target

var driversTargetChart = new Chart("drivers-target", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "black",
            data: y1Values
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Most of the drivers achieve the target"
        }
    }
});

// drivers target

var driversCashChart = new Chart("drivers-cash", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "black",
            data: y2Values
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Most of the drivers Cash"
        }
    }
});

// drivers target

var driversDebitChart = new Chart("drivers-debit", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "black",
            data: y1Values
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Most of the drivers Debit"
        }
    }
});

// drivers target

var driversCreditChart = new Chart("drivers-credit", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: "black",
            data: y2Values
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Most of the drivers Credit"
        }
    }
});