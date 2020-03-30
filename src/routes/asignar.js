const express= require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar',async(req,res) => {
    const asignar = await pool.query('SELECT * FROM asigna_materia_docente')
    res.render('asignar/agregar',{asignar});
});

router.get('/eliminar', async(req,res) => {
    const asignar = await pool.query('SELECT * FROM asigna_materia_docente')
    res.render('asignar/eliminar',{asignar});

   
    
});
router.get('/modificar', async(req,res) => {
    const asignar = await pool.query('SELECT * FROM asigna_materia_docente')
    res.render('asignar/modificar',{asignar});
    
});

router.get('/consultar', async(req,res) => {
    const asignar = await pool.query('SELECT * FROM asigna_materia_docente')
    res.render('asignar/consultar',{asignar});
    
});




module.exports =router;