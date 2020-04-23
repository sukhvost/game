window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // let num1 = Math.floor(Math.random() * 3);
    // let num2 = Math.floor(Math.random() * 3);

    let score = 0;
    let btns = document.querySelectorAll('button');



    let massArg = ['Камень', 'Ножницы', 'Бумага'];

    function getRandNum() {
        return Math.floor(Math.random() * 3);
    }


    function getArg(arg) {
        let randNum = getRandNum();
        return arg[randNum];
    }
    let randArg = getArg(massArg);

    function getScore() {

    }

    console.log(randArg);


});