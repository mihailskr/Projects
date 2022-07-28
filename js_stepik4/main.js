btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
radioButtons = document.querySelectorAll('[name="food"]');
btnElement.addEventListener("click", function(){  
    let total = 0;
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            total += Number(radioButton.value)
        }
    }            
    if (total.length != 0) {
        resultElement.textContent = total + " руб.";
    } else {
        resultElement.textContent = "0 руб." 
    }
});