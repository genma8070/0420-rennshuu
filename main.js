const btn = document.querySelector("#btn")
const num1 = document.querySelector("#mae")
const num2 = document.querySelector("#ushiro")
const sum = document.querySelector("#kekka")
const go = document.querySelector("#keisann")



btn.addEventListener("click", function () {
    const n1 = +num1.value;
    const n2 = +num2.value
    const g = go.value;
    if (g == "+") {
        sum.innerText = (n1 + n2);
    }

    if (g == "-") {
        sum.innerText = (n1 - n2);
    }
    if (g == "*") {
        sum.innerText = (n1 * n2);
    }
    if (g == "/") {
        sum.innerText = (n1 / n2);
    }
});