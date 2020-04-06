const express= require('express');
const router = express.Router();
const pool = require("../database")


router.get('/agregar',async(req,res) => {
    const estu = await pool.query('SELECT * FROM estudiantes')
    res.render('estudiante/agregar',{estu});

});

router.post("/agregar",async(req,res)=>{
            const {id_estudiantes,nombre_estu,edad,correo}= req.body;
            const newUser = {id_estudiantes,nombre_estu,edad,correo};

        await pool.query("insert into estudiantes set ?", [newUser]);
        res.redirect("/estu/agregar");
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