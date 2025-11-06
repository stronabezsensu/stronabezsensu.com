const guziczek = document.getElementById("guziczek");
const wynik = document.getElementById("wynik");

var a = 1;
guziczek.addEventListener("click", () => {
    wynik.innerText = "wynik: " + a++
    // wynik.innerText = `wynik: ${a}`
})
