
const user = {
	name: "",
	surname: "",
}

const goodsElements = {
	name: "",
	price: "",

}
const countElements =  {

}

const btnElement = document.querySelector(".btn");
const inputSurname = document.querySelector('[name="surname"]');
const inputName =  document.querySelector('[name="name"]');
sumElement = document.querySelector(".sum");


btn.addEventListener("click", function(){
user.name = inputName.value;
user.surname = inputSurname.value;

// alert(user.name + " " + user.surname);


var countGoods = {

	"expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
};

countGoods = document.getElementsByClassName('numeric');
// var numericsChecked = [];

for(var index = 0; index < countGoods.Object.keys; index++){
	if (countGoods != 0){
		// numericsChecked.push(numerics[index].value)
		
	}
   console.log(Object.keys(obj));
}


var checkboxes = document.getElementsByClassName('checkbox');
 var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
 let total = 0;

  for (var index = 0; index < checkboxes.length; index++) {
     if (checkboxes[index].checked) {
     	total += Number(checkboxes[index].value)
        checkboxesChecked.push(checkboxes[index].value)
        checkboxesChecked.push(checkboxes[index].dataset.goods); // положим в массив выбранный
      	 
      	 sumElement.textContent = total + " р.";
      	 console.log(checkboxes[index].dataset.goods + " " + checkboxes[index].value);
      	
      	
     }

  }
   // alert(total);
  return checkboxesChecked; 
});
