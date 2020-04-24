window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let counter = 0;
    let start = document.querySelector('.wrap');
    let massArg = ['Камень', 'Ножницы', 'Бумага'];
    let massImg = ['0.png', '1.png', '2.png'];
    let gamer1 = 0;
    let gamer2 = 0;
    let scoreg = 1;
    let score1 = document.querySelector('.score_1 span');
    let score2 = document.querySelector('.score_2 span');
    start.addEventListener('click', function(e) {
        // console.log(e)
        let target = e.target;

        if (target.innerText == 'gamer 1') {
            console.log(getArg(massArg));
            let elem = document.querySelector('.card_first_gamer img');
            showImg(elem, massImg, counter);
            gamer1 = counter;
            // target.disabled = true;

        }
        if (target.innerText == 'gamer 2') {
            console.log(getArg(massArg));
            let elem = document.querySelector('.card_second_gamer img');
            showImg(elem, massImg, counter);
            gamer2 = counter;
            // target.disabled = true;
        }
        if (target.innerText == 'result') {
            getResult(gamer1, gamer2);
            // target.disabled = true;
        }

    });

    // выводим результаат на страницу
    function getResult(a, b) {
        let outResult = document.querySelector('.result p');
        outResult.classList.add('decor');
        if (a < b && b != 2 || a == 1 && b == 2 || a == 2 && b == 0) {
            outResult.innerText = 'Победил игрок номер 1!';
        } else if (a == b) {
            outResult.innerText = 'У Вас ничья, Господа!';
        } else {
            outResult.innerText = 'Победил игрок номер 2!';
        }
    }

    // получаем случайное число от 0 до 3, так как наши массивы длинной 3
    function getRandNum() {
        let num = Math.floor(Math.random() * 3);
        return num;
    }

    // получаем елемент массива
    function getArg(arg) {
        counter = getRandNum();
        return arg[counter];
    }

    // устанавливаем контент
    function showImg(elem, imgs, i) {
        let img = imgs[i];
        elem.setAttribute('src', `../img/${img}`);
    }
});