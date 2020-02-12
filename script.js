/*jshint esversion: 6 */
<<<<<<< HEAD

function hello() {
  console.log('hello');
}

let btn = document.querySelector('#btn');
console.log(btn.clientWidth);
btn.onclick = hello;
=======
let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

		if ((typeof(a)) === `string` && (typeof(a)) !=null && (typeof(b)) != null && a != `` && b != `` && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b;
		} else {
			alert('Еще раз!');
		}//else  надо вернуться обратно в цикл
}

// let i =0;
// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 			b = prompt("Во сколько обойдется?", '');

// 		if ((typeof(a)) === `string` && (typeof(a)) !=null && (typeof(b)) != null && a != `` && b != `` && a.length < 50) {
// 			console.log('done');
// 			appData.expenses[a] = b;
// 			i++;
// 		} else {
// 			alert('Еще раз!');
// 		}//else  надо вернуться обратно в цикл
// }

// let i = 0;
// do {
// 	i++;
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 				b = prompt("Во сколько обойдется?", '');
	
// 			if ((typeof(a)) === `string` && (typeof(a)) !=null && (typeof(b)) != null && a != `` && b != `` && a.length < 50) {
// 				console.log('done');
// 				appData.expenses[a] = b;
// 				i++;
// 			} else {
// 				alert('Еще раз!');
// 			}//else  надо вернуться обратно в цикл
// } while (i<=2);
	



appData.moneyPerDay = appData.budget / 30;
>>>>>>> 5cab7cb9ee1cef3b4b794e10f582850f2979fd1d

let sowModal = document.querySelector('#modal-show');

function show() {
  let modal = document.querySelector('.modal');
  // modal.hidden = true;
  modal.style.display = "block";
}

sowModal.onclick = show;
