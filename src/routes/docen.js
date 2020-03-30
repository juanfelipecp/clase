const express= require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar',async(req,res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/agregar',{docen});
});

router.get('/eliminar', async(req,res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/eliminar',{docen});

    
    
});
router.get('/modificar', async(req,res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/modificar',{docen});
    
});

router.get('/consultar', async(req,res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/consultar',{docen});
    
});




module.exports =router;