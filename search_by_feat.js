const submit_button = document.querySelector(".submit_button")

var json = sessionStorage.getItem("LibraryList");
var libraryList = JSON.parse(json);
console.log("library")
console.log(libraryList[0]);

console.log("arrived")
submit_button.addEventListener("submit", handleSubmit)

function handleSubmit(e)
{
    e.preventDefault()

    console.log("Hi")
    var fantasy = document.getElementById("fantasy").checked
    var sciFi = document.getElementById("scifi").checked
    var cofa = document.getElementById("cofa").checked
    var realistic = document.getElementById("realistic").checked
    var mystery = document.getElementById("mystery").checked
    var adventure = document.getElementById("adventure").checked
    var historical = document.getElementById("historical").checked
    var classic = document.getElementById("classic").checked
    var myth = document.getElementById("myth").checked

    var fProtag = document.getElementById("female").checked
    var mProtag = document.getElementById("male").checked
    var oProtag = document.getElementById("other").checked

    var human = document.getElementById("human").checked
    var animal = document.getElementById("animal").checked
    var mythical = document.getElementById("myth_creat").checked

    var maine = document.getElementById("maine").checked
    var series = document.getElementById("series").checked
    var multicult = document.getElementById("multicultural").checked
    var lgbtq = document.getElementById("lgbtq").checked

    var nBook = ["", "", fantasy, sciFi, historical, cofa, mystery, realistic, adventure, myth, classic, mProtag, fProtag, oProtag, human, animal, mythical, series, maine, multicult, lgbtq, "", ""]

    console.log(nBook)
    const jsonBook = JSON.stringify(nBook);
    sessionStorage.setItem("WantedFeatures", jsonBook);
    sessionStorage.setItem("Backpointer", "Features");

    window.location='book_suggestions.html';
}