window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let counter = 0;
    let start = document.querySelector('.wrap');
    let massImg = ['0.png', '1.png', '2.png'];
    let gamer1 = 0;
    let gamer2 = 0;
    let btns = document.querySelectorAll('.gamer button');
    let scoreGamer1 = 0;
    let scoreGamer2 = 0;
    let elemScore1 = document.querySelector('.score_1 span');
    let elemScore2 = document.querySelector('.score_2 span');
    start.addEventListener('click', function(e) {
        // console.log(e)
        let target = e.target;

        if (target.innerText == 'Start') {
            document.querySelector('.intro').style.display = 'none';
            document.querySelector('.game').style.display = 'block';
        }

        if (target.innerText == 'gamer 1') {
            let elem = document.querySelector('.card_first_gamer img');
            showImg(elem, massImg);
            gamer1 = counter;
            target.disabled = true;
        }
        if (target.innerText == 'gamer 2') {
            let elem = document.querySelector('.card_second_gamer img');
            showImg(elem, massImg);
            gamer2 = counter;
            target.disabled = true;
        }
        if (target.innerText == 'result') {
            getResult(gamer1, gamer2);
            btns.forEach(function(item) {
                item.disabled = false;
            });
        }
    });
    // выводит счет на страницу
    function showScore(elem, score) {
        elem.innerText = score;
    }
    // выводит результат на страницу
    function getResult(a, b) {
        let outResult = document.querySelector('.result p');
        outResult.classList.add('decor');
        if (a < b && b != 2 || a == 1 && b == 2 || a == 2 && b == 0) {
            scoreGamer1++;
            showScore(elemScore1, scoreGamer1);
            outResult.innerText = 'Победил игрок номер 1!';
        } else if (a == b) {
            outResult.innerText = 'У Вас ничья, Господа!';
        } else {
            scoreGamer2++;
            showScore(elemScore2, scoreGamer2);
            outResult.innerText = 'Победил игрок номер 2!';
        }
    }

    // генерирует случайное число от 0 до длинны массива, так как наши массивы длинной 3
    function getRandNum() {
        let num = Math.floor(Math.random() * massImg.length);
        return num;
    }

    // выводит контент на страницу
    function showImg(elem, imgs) {
        counter = getRandNum();
        let img = imgs[counter];
        elem.setAttribute('src', `../img/${img}`);
    }
});