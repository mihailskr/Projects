
const userSurname = document.querySelector('[name="surname"]');//получите элемент input с фамилией(*)

const userName =  document.querySelector('[name="name"]');//получите элемент input с именем(*)

// const goodsElements = //получите элементы checkbox с товарами goods(*)
// const countElements =  //получите элементы input с кол-вом(*)

// const btn =  document.querySelector(".btn");//получите элемент button(*)
// const resultElem =//получите элемент span для итоговой суммы

// //создайте переменную для хранения итоговой суммы (*)
// let 

//этот объект нужен для хранения количества каждого товара
//либо, вы можете создать переменные/массив для хранения значений 
// const countGoods = { 
//     "expresso": 0,
//     "americano": 0,
//     "latte": 0,
//     "capuchino": 0,
//     "chocolate_muffin": 0,
//     "blueberry_muffin": 0,
//     "apple_tart": 0
// }

// //этот объект нужен для хранения цены каждого товара
// //т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
// //либо, вы можете создать переменные/массив для хранения значений
// const choicePriceGoods = { 
//     "expresso": 0,
//     "americano": 0,
//     "latte": 0,
//     "capuchino": 0,
//     "chocolate_muffin": 0,
//     "blueberry_muffin": 0,
//     "apple_tart": 0
// }

//создайте функцию, которая будет считать итоговую сумму, подумайте над формулой.
// function 


//для каждого элемента input с кол-вом нужно повесить событие на изменение change, 
//по которому в объекте должны меняться значения на значение в input
// countElements.forEach(elem => {
    
// })

// //для каждого элемента checkbox нужно повесить событие на изменение change, 
// //по которому в объекте должны меняться значение на цену, если чекбокс выбран
// //или обратно на 0, если чекбокс не выбран
// goodsElements.forEach(product => {
    
// });

//по клику на кнопку должен появиться alert с текстом
//(*)для выбравших способ 1 или 2 именно внутри данного события будет происходить подсчет итоговой суммы,
//вам нужно перебрать все элементы checkbox и input в цикле

btn.addEventListener("click", function(){
    user.name = userName.value;
    user.surname = userSurname.value;
    console.log(user);

})
