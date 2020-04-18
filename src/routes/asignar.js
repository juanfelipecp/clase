const express= require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar',async(req,res) => {
    const asignar = await pool.query('SELECT * FROM asigna_materia_docente')
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    const periodo = await pool.query('SELECT id_periodo,periodo FROM periodo_academico')
    res.render('asignar/agregar',{asignar,docen,materia,periodo});
});

router.post("/agregar",async(req,res)=>{

            const {id_amd,id_docente,id_materia,id_periodo}= req.body;
            const newUser = {id_amd,id_docente,id_materia,id_periodo};

        await pool.query("insert into asigna_materia_docente set ?", [newUser]);
        res.redirect("/asignar/agregar");
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