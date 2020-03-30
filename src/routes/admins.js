const express= require('express');
const router = express.Router();


router.get('/agregar', (req,res) => {
    
    
   res.render('admin/agregar');
});

router.get('/eliminar', (req,res) => {

    res.render('admin/eliminar');
    
});
router.get('/modificar', (req,res) => {

    res.render('admin/modificar');
    
});

router.get('/consultar', (req,res) => {

    res.render('admin/consultar');
    
});




module.exports =router;