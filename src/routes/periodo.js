const express= require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar',async(req,res) => {
    const periodo = await pool.query('SELECT id_periodo,periodo FROM periodo_academico')
    res.render('periodo/agregar',{periodo});
});

router.post("/agregar",async(req,res)=>{
            const {id_periodo,periodo}= req.body;
            const newUser = {id_periodo,periodo};

        await pool.query("insert into periodo_academico set ?", [newUser]);
        res.redirect("/periodo/agregar");
});

router.get('/eliminar', async(req,res) => {
    const periodo = await pool.query('SELECT id_periodo,periodo FROM periodo_academico')
    res.render('periodo/eliminar',{periodo});

   
    
});
router.get('/modificar', async(req,res) => {
    const periodo = await pool.query('SELECT id_periodo,periodo FROM periodo_academico')
    res.render('periodo/modificar',{periodo});
    
});

router.get('/consultar', async(req,res) => {
    const periodo = await pool.query('SELECT id_periodo,periodo FROM periodo_academico')
    res.render('periodo/consultar',{periodo});
    
});




module.exports =router;