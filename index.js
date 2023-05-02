function fun() {
    document.getElementById("offcanvasTableData").style.right = "399px";
}

function clo() {
    document.getElementById("offcanvasTableData").style.right = "0px";
}


const chColor = (event) => {
    if (event.target.id == "first") {
        document.getElementById("first").style.backgroundColor = 'rgb(255, 170, 0)'
        document.getElementById("second").style.backgroundColor = 'white'
        document.getElementById("third").style.backgroundColor = 'white'
        document.getElementById("four").style.backgroundColor = 'white'
        document.getElementById("five").style.backgroundColor = 'white'
        document.getElementById("six").style.backgroundColor = 'white'
    }
    if (event.target.id == "second") {
        document.getElementById("second").style.backgroundColor = 'rgb(255, 170, 0)'
        document.getElementById("first").style.backgroundColor = 'white'
        document.getElementById("third").style.backgroundColor = 'white'
        document.getElementById("four").style.backgroundColor = 'white'
        document.getElementById("five").style.backgroundColor = 'white'
        document.getElementById("six").style.backgroundColor = 'white'
    }
    if (event.target.id == "third") {
        document.getElementById("third").style.backgroundColor = 'rgb(255, 170, 0)'
        document.getElementById("first").style.backgroundColor = 'white'
        document.getElementById("second").style.backgroundColor = 'white'
        document.getElementById("four").style.backgroundColor = 'white'
        document.getElementById("five").style.backgroundColor = 'white'
        document.getElementById("six").style.backgroundColor = 'white'
    }
    if (event.target.id == "four") {
        document.getElementById("four").style.backgroundColor = 'rgb(255, 170, 0)'
        document.getElementById("first").style.backgroundColor = 'white'
        document.getElementById("second").style.backgroundColor = 'white'
        document.getElementById("third").style.backgroundColor = 'white'
        document.getElementById("five").style.backgroundColor = 'white'
        document.getElementById("six").style.backgroundColor = 'white'
    }
    if (event.target.id == "five") {
        document.getElementById("five").style.backgroundColor = 'rgb(255, 170, 0)'
        document.getElementById("first").style.backgroundColor = 'white'
        document.getElementById("second").style.backgroundColor = 'white'
        document.getElementById("third").style.backgroundColor = 'white'
        document.getElementById("four").style.backgroundColor = 'white'
        document.getElementById("six").style.backgroundColor = 'white'
    }
    if (event.target.id == 'six') {
        document.getElementById("six").style.backgroundColor = 'rgb(255, 170, 0)'
        document.getElementById("first").style.backgroundColor = 'white'
        document.getElementById("second").style.backgroundColor = 'white'
        document.getElementById("third").style.backgroundColor = 'white'
        document.getElementById("four").style.backgroundColor = 'white'
        document.getElementById("five").style.backgroundColor = 'white'
    }
}