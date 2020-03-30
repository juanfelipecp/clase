const express= require('express');
const router = express.Router();
const pool = require("../database")


router.get('/agregar',async(req,res) => {
    const estu = await pool.query('SELECT * FROM estudiantes')
    res.render('estudiante/agregar',{estu});
});

router.get('/eliminar', async(req,res) => {
    const estu = await pool.query('SELECT * FROM estudiantes')
    res.render('estudiante/eliminar',{estu});
    
});
router.get('/modificar', async(req,res) => {
    const estu = await pool.query('SELECT * FROM estudiantes')
    res.render('estudiante/modificar',{estu});

    
});

router.get('/consultar', async(req,res) => {
    const estu = await pool.query('SELECT * FROM estudiantes')
    res.render('estudiante/consultar',{estu});
    
    
});




module.exports =router;