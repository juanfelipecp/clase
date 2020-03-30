const express = require('express');
const router = express.Router();
const par = require('body-parser');


router.get('/suma', (req, res) => {

    res.render('operaciones/suma');
});

router.get('/fac', (req, res) => {

    res.render('operaciones/fac');
});

router.get('/ast', (req, res) => {

    res.render('operaciones/asteriscos');
});

router.post('/ast', (req, res) => {

    res.render('operaciones/asteriscos');

    let num = req.body.na;

    num = parseInt(num);
  
    let asterisco = 1;
    let espacios = num -1;
    if (num % 2 == 1) {
        for (let q = 1; q <= num; q++) {
            let pisos = ' ';
            
        }
        for (let q = 1; q <= num; q++) {
            let pisos = ' ';

            for (let x = 1; x <= espacios ; x += 1) {
                pisos = pisos + ' ';
            }
            for (let z = 1; z <= asterisco -1  ; z += 1) {
                pisos = pisos + '*';
            }
            asterisco = asterisco + 1;
            espacios -= 1;
            console.log(pisos) 
        }
        asterisco =num -1;
        espacios= 1;


        for (let q = 1; q <= num -1     ; q++) {
             let piso = ' ';
             

            for (let x = 1; x <= espacios   ; x+=1) {
                piso = piso + ' ';
                
            }
            for (let e = 1; e <= asterisco  -1  ; e+=1) {
                 piso = piso +'*';
            }
                       
            asterisco = asterisco - 1;
            espacios +=1;
            console.log(piso)
        }
        
    }


    else {
        console.log("el numero es par la cago mano :C")

    }
});

router.post('/suma', (req, res) => {

    let num1 = req.body.n1;
    let num2 = req.body.n2;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let suma = num1 + num2;


    res.render('operaciones/suma');
    console.log(num1, ' + ', num2, ' = ', suma);


});

router.post('/fac', (req, res) => {
    res.render('operaciones/fac');
    let n = req.body.n;
    n = parseInt(n);
    var resul = n;
    var resul2 = n;
    array = n;

    for (i = 1; i <= n; i++) {

        resul = resul * i;
        console.log(i, 'x');

    }
    for (x = 1; x < n; x++) {

        resul2 = resul2 * x;
    } console.log(resul2);

});


module.exports = router;