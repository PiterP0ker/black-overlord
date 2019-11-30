'use strict';

//Black overlord


// let userName = prompt('Кто??', '');

// if (userName == 'Смотря кто спрашивает') {

// 	let userPassword = prompt('Пароль?');

// 	if (userPassword == 'Я главный') {
// 		alert('Здравствуйте!');
// 	} else if (userPassword == '' || userPassword == null) {
// 		alert('Отменено');
// 	} else {
// 		alert('Неверный пароль');
// 	}

// } else if (userName == '' || userName == null) {
// 	alert('Отменено');
// } else {
// 	alert('Я тебя не знаю');
// }




//1

// let userAge = prompt('Сколько вам лет?', '');

// if (userAge > 0 && userAge < 12) {
// 	alert('Ребенок');
// } else if (userAge >= 12 && userAge < 18) {
// 	alert('Подросток');
// } else if (userAge >= 18 && userAge < 60) {
// 	alert('Взрослый');
// } else if (userAge >= 60 && userAge < 100) {
// 	alert('Пенсионер');
// } else {
// 	alert('Вы умерли');
// }


//2

// let number = prompt('Назовите число от 0 до 9', '');

// if (number == 0) {
// 	alert(')');
// } else if (number == 1) {
// 	alert('!');
// } else if (number == 2) {
// 	alert('@');
// } else if (number == 3) {
// 	alert('#');
// } else if (number == 4) {
// 	alert('$');
// } else if (number == 5) {
// 	alert('%');
// } else if (number == 6) {
// 	alert('^');
// } else if (number == 7) {
// 	alert('&');
// } else if (number == 8) {
// 	alert('*');
// } else if (number == 9) {
// 	alert('(');
// } else {
// 	alert('от 0 до 9, шо не ясно..');
// }


//3

let number = prompt('Назовите трёхзначное число', '');
let length = number.length;


if (length == 3) {
	alert('внатуре трёхзначное');
	if (length[0] == length[1]) {
		alert('ура совпало');
	} else if (length[1] == length[2]) {
		alert('ура совпало');
	} else if (length[0] == length[2]) {
		alert('ура совпало');
	} else {
		alert('Совпадений нет');
	}
} 
