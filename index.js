
var element = document.getElementsByClassName("Menuitemdiv");
for (var i = 0; i < element.length; i++) {
    element[i].onclick = function () {
        var el = element[0];
        while (el) {
            if (el.tagName == "DIV") {
                el.classList.remove("divBackgroundColor");
            }
            el = el.nextSibling;
        }
        this.classList.add("divBackgroundColor");
    }
}


function fun() {
    document.getElementById("offcanvasTableData").style.right = "399px";
}

function clo() {
    document.getElementById("offcanvasTableData").style.right = "0px";
}

var xValues = ["12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan"];
var yValues = [25, 50, 40, 85, 125, 100, 124];
// var barColors = ["brown", "gray", "orange", "blue", "green", "purple", "red"];
var barColors = ["orange", "orange", "orange", "orange", "orange", "orange", "orange"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            borderRadius: 50
        }]
    },
    options: {
        legend: { display: false },
    }
});


var XValues = ["Fast Food (26%)", "Main Course (26%)", "Beverage (12%)", "Dessert (32%)", "Italian (10%)", "Starter (9%)", "Indian (16%)", "Other (6%)"]
var YValues = [20, 15, 12, 12, 32, 9, 16, 6]
var barColors = ["red", "orange", "pink", "aqua", "green", "purple", "gray", "blue"];

new Chart("piechart", {
    type: "doughnut",
    data: {
        labels: XValues,
        datasets: [{
            backgroundColor: barColors,
            data: YValues
        }]
    },
    options: {
        title: {
            display: true,
        }
    }
});