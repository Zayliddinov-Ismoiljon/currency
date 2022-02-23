var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form-control");
var elSelect = document.querySelector(".form-select");
var elResult = document.querySelector(".result"); 


elForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var elInputVal= elInput.value;
    var elSelectVal= elSelect.value;

    var allResult= elInputVal * elSelectVal;
    elResult.textContent= `${allResult}`;


    
});

//1$ 80 rubl
//1$ 0.88 euro
//1$ 10833 som