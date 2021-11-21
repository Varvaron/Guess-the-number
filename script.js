'use strict';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const answer = Math.floor(Math.random() * 100 + 1);
const form = document.querySelector('.form');
const number = form.querySelector('#number-input');
const resultOutput = form.querySelector('#output-result');
const attemptsOutput = form.querySelector('#output-attepmts');
const submitButton = form.querySelector('[type="submit"]');
const cancelButton = form.querySelector('[type="button"]');
let allAttempts = [];
let attempt = 1;

submitButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	const userValue = number.value;
	if (userValue > answer && userValue <= 100) {
		resultOutput.textContent = `Выберите число между ${MIN_NUMBER} и ${userValue}`;
		allAttempts.push(` ${userValue}`);
		attemptsOutput.textContent = `Предыдушие ответы: ${allAttempts}`;
		attempt++;
	}
	else if (userValue < answer && userValue >= 1) {
		resultOutput.textContent = `Выберите число между ${userValue} и ${MAX_NUMBER}`;
		attempt++;
		allAttempts.push(` ${userValue}`);
		attemptsOutput.textContent = `Предыдушие ответы: ${allAttempts}`;
	} else if (userValue < 1 || userValue > 100) {
		resultOutput.textContent = `Введите любое целое число от ${MIN_NUMBER} до${MAX_NUMBER}`;
	} else {
		resultOutput.textContent = `Вы угадали число ${answer}. Количество попыток - ${attempt}`;
}
});

cancelButton.addEventListener('click', () => location.reload());