window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let counter = 0;
    let start = document.querySelector('.wrap');
    let massArg = ['Камень', 'Ножницы', 'Бумага'];
    let gamer1 = 0;
    let gamer2 = 0;
    start.addEventListener('click', function(e) {
        // console.log(e)
        let target = e.target;

        if (target.innerText == 'gamer 1') {
            console.log(getArg(massArg));
            gamer1 = counter;
            target.disabled = true;

        }
        if (target.innerText == 'gamer 2') {
            console.log(getArg(massArg));
            gamer2 = counter;
            target.disabled = true;
        }
        if (target.innerText == 'result') {
            getResult(gamer1, gamer2);
            target.disabled = true;
        }

    });

    function getResult(a, b) {
        if (a < b && b != 2 || a == 1 && b == 2 || a == 2 && b == 0) {
            console.log('win 1');
        } else if (a == b) {
            console.log('nobody');
        } else {
            console.log('win 2');
        }
    }

    function getRandNum() {
        let num = Math.floor(Math.random() * 3);
        return num;
    }

    function getArg(arg) {
        counter = getRandNum();
        return arg[counter];
    }
});