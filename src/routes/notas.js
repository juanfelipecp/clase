const express= require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar',async(req,res) => {
    const notas = await pool.query('SELECT id_notas,id_estudiantes,id_docentes,id_materia,id_periodo,nota FROM notas')
    res.render('notas/agregar',{notas});
});

router.get('/eliminar', (req,res) => {

    res.render('notas/eliminar');
    
});
router.get('/modificar', (req,res) => {

    res.render('notas/modificar');
    
});

router.get('/consultar', (req,res) => {

    res.render('notas/consultar');
    
});




module.exports =router;