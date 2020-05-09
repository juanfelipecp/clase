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

router.get('/eliminar/:id_materia', async (req, res) => {
    const { id_materia } = req.params;
    await pool.query('delete from materia where id_materia= ?', [id_materia]);
    res.redirect('/materia/eliminar');

});


router.get('/modificar', async(req,res) => {
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    res.render('materia/modificar',{materia});
    
});

router.get('/modificar/:id_materia', async (req, res) => {
    const { id_materia } = req.params;
    const materiaid = await pool.query('SELECT * FROM materia WHERE id_materia= ?', [id_materia]);
    res.render('materia/modificar', { materiaid });

});
router.post('/modificaar/:id_materia', async (req, res) => {
    const { id_materia } = req.params;
    const { materia } = req.body;
    const updateestu = { materia };
    await pool.query('update materia set ? where id_materia = ? ', [updateestu, id_materia]);
    res.redirect('/materia/modificar');

});


router.get('/consultar', async(req,res) => {
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    res.render('materia/consultar',{materia});
    
});




module.exports =router;