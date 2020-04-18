const express= require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar',async(req,res) => {
    const notas = await pool.query('SELECT id_notas,id_estudiantes,id_docentes,id_materia,id_periodo,nota FROM notas')
    const estu = await pool.query('SELECT * FROM estudiantes')
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    const periodo = await pool.query('SELECT id_periodo,periodo FROM periodo_academico')
    res.render('notas/agregar',{notas,estu,docen,materia,periodo});
});
router.post("/agregar",async(req,res)=>{
            const {id_notas,id_estudiantes,id_docentes,id_materia,id_periodo,nota}= req.body;
            const newUser = {id_notas,id_estudiantes,id_docentes,id_materia,id_periodo,nota};

        await pool.query("insert into notas set ?", [newUser]);
        res.redirect("/notas/agregar");
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