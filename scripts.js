const button = document.querySelector("button");
const currencySelect = document.querySelector("#currencyConvertedSelected");


function toConvert() {
    const inputValue = document.querySelector("#valueToConvert").value;
    const currencyValueBefore = document.querySelector(".currencyValueBefore");
    const currencyValueAfter = document.querySelector(".currencyValueAfter");
    const currencySelected = document.querySelector("#currencyConvertedSelected").value;

    const dolarToday = 5.20;
    const euroToday = 6.40;
    const libraToday = 6.28;
    const bitcoinToday = 221600.54;

    if (currencySelected == "dolar") {

        currencyValueAfter.innerHTML = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue / dolarToday)
    }

    if (currencySelected == "euro") {

        currencyValueAfter.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue / euroToday)
    }

    if (currencySelected == "libra") {

        currencyValueAfter.innerHTML = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputValue / libraToday)
    }

    if (currencySelected == "bitcoin") {

        const bitcoin = Intl.NumberFormat("en-US", { style: "decimal", minimumFractionDigits: 8 }).format(inputValue / bitcoinToday)


        currencyValueAfter.innerHTML = `${bitcoin} BTC`
    }

    currencyValueBefore.innerHTML = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue)
}

function changeCurrency () {
    const imgConverted = document.getElementById("imgCurrecyConverted");
    const currencyConvertedName = document.querySelector("#currencyConvertedName")
    
    if (currencySelect.value == "dolar"){
        imgConverted.src = "./assets/dolar.png"
        currencyConvertedName.innerHTML = "Dólar americano"
    }

    if (currencySelect.value == "euro"){
        imgConverted.src = "./assets/euro.png"
        currencyConvertedName.innerHTML = "Euro"
    }

    if (currencySelect.value == "libra"){
        imgConverted.src = "./assets/libra.png"
        currencyConvertedName.innerHTML = "Libra"
    }

    if (currencySelect.value == "bitcoin"){
        imgConverted.src = "./assets/bitcoin.png"
        currencyConvertedName.innerHTML = "Bitcoin"
    }
toConvert()
}


button.addEventListener("click", toConvert);

currencySelect.addEventListener("change", changeCurrency)