let form = document.forms["registracija"];
let btnReset = document.querySelector("#reset");
let btnSubmit = document.querySelector("#submit");
let btnPrint = document.querySelector("#btn-list");
let list = document.getElementById("list");
let sarasas = document.querySelector("#sarasas");

let masyvas = [
    {
        vardas: "Vaida",
        pavarde: "Linkuviene",
        mokykla: "aaa",
        miestas: "Vilnius",
        sritis: "",
    }
];

console.log("masyvas");

// registracijos konstruktorius

class dalyvis1 {
    constructor(vardas, pavarde, mokykla, miestas) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.mokykla = mokykla;
        this.miestas = miestas;
        this.sritis = sritis;
    }
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const vardas = form["vardas"].value;
    const pavarde = form["pavarde"].value;
    const mokykla = form["mokykla"].value;
    const miestas = form["miestas"].value;

    const sritis = document.getElementById("list").value;
    if (sritis == "Front-end") {
        sritis = "Front-end";
    }
    else if (sritis == "Back-end") {
        sritis = "Back-end";
    }


    let dalyvis = new Dalyvis(
        vardas,
        pavarde,
        mokykla,
        miestas,
        sritis
    );

    form.addEventListener("submit", function (e) {
        masyvas.push(dalyvis);
        console.log(masyvas);
    });

    btnPrint.addEventListener("click", function () {
        sarasas.innerHTML = dalyvis;

    })



});

