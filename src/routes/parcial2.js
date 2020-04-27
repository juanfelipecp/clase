const express = require('express');
const router = express.Router();
const pool = require("../database")

    
router.get('/main',async(req,res) => {
    const pers = await pool.query('SELECT * FROM personas')
    const tipo = await pool.query('SELECT * FROM tipos')
    res.render('parcial2/main',{pers,tipo});

});

router.post("/main",async(req,res)=>{
    const {id_personas,documento,nombre,tipo }= req.body;
    const newUser = {id_personas,documento,nombre,tipo};

await pool.query("insert into personas set ?", [newUser]);
res.redirect("/parcial2/main");
});


router.get('/postularse',async(req,res) => {
    const pers = await pool.query('SELECT * FROM personas where tipo=3')
    const tipo = await pool.query('SELECT * FROM tipos')
    const post = await pool.query('SELECT * FROM postulados')
    res.render('parcial2/postular',{pers,tipo,post});

});

router.post("/postularse",async(req,res)=>{

    const {nombre }= req.body;
    const newUser = {nombre};

await pool.query("insert into postulados set ?", [newUser]);
res.redirect("/parcial2/postularse");

});


router.get('/votar',async(req,res) => {
    const pers = await pool.query('SELECT * FROM personas where tipo=1 or tipo=2')
    const post = await pool.query('SELECT * FROM postulados')
    const voto = await pool.query('SELECT * FROM votos')

    res.render('parcial2/votar',{pers,post,voto});

});

router.post("/votar",async(req,res)=>{

    const {documento,nombre,voto }= req.body;
    const newUser = {documento,nombre,voto};

await pool.query("insert into votos set ?", [newUser]);
res.redirect("/parcial2/votar");

});







module.exports = router;