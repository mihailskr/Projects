btnElement = document.querySelector(".btn");
resultElementName = document.querySelector('[name="name"]');
resultElementSurname = document.querySelector('[name="surname"]');
resultElement = document.querySelector(".result");
btnElement.addEventListener("click",function(){
resultElement.textContent = (`Здравствуйте, ${resultElementName.value} ${resultElementSurname.value}!`);
});