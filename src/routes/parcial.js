const express = require('express');
const router = express.Router();


router.get('/home', (req, res) => {

    res.render('parcial/home');
});

router.get('/mult', (req, res) => {

    res.render('parcial/mult');
});
router.get('/op', (req, res) => {

    res.render('parcial/op');
});

router.get('/fac', (req, res) => {

    res.render('parcial/fac');
});
router.get('/cards', (req, res) => {

    res.render('parcial/cards');
});

router.post('/op', (req, res) => {
    let n2 = req.body.n2;
       n2 = parseInt(n2);

    let n3 = req.body.n3;
     n3 = parseInt(n3);

    let bt = req.body
  

    if(bt = 'suma'){
        su= n2 + n3
        console.log(su)

    }
    else{
        if(bt = 'resta'){
            re= n2 - n3
        console.log(re)

        }
        else{

            if(bt = 'division'){

                di= n2 / n3
                console.log(di)

            }
            else{

                if(bt = 'multiplicacion'){

                    mu= n2 * n3
                     console.log(mu)

                }
            }
        }

    }



    res.render('parcial/cards');
});

router.post('/fac', (req, res) => {

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
    res.render('parcial/op');

});

router.post('/mult', (req, res) => {


    let n1 = req.body.n1;
    n1 = parseInt(n1);

    for (let i = 1; i <= 10; i++) {

        mult = (n1 * i)

        console.log(n1, " X ", i, " = ", mult)

    }
    res.render('parcial/fac');
});


module.exports = router;