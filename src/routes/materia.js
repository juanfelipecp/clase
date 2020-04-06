const express= require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar',async(req,res) => {
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    res.render('materia/agregar',{materia});
});

router.post("/agregar",async(req,res)=>{
            const {id_materia,materia}= req.body;
            const newUser = {id_materia,materia};

        await pool.query("insert into materia set ?", [newUser]);
        res.redirect("/materia/agregar");
});

router.get('/eliminar', async(req,res) => {
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    res.render('materia/eliminar',{materia});

   
    
});
router.get('/modificar', async(req,res) => {
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    res.render('materia/modificar',{materia});
    
});

router.get('/consultar', async(req,res) => {
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    res.render('materia/consultar',{materia});
    
});




module.exports =router;