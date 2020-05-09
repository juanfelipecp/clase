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

router.get('/eliminar/:id_estudiantes', async (req, res) => {
    const { id_estudiantes } = req.params;
    await pool.query('delete from estudiantes where id_estudiantes= ?', [id_estudiantes]);
    res.redirect('/estu/eliminar');



});



router.get('/modificar', async(req,res) => {
    const estu = await pool.query('SELECT * FROM estudiantes')
    res.render('estudiante/modificar',{estu});

    
});

router.get('/modificar/:id_estudiantes', async (req, res) => {
    const { id_estudiantes } = req.params;
    const estuid = await pool.query('SELECT * FROM estudiantes WHERE id_estudiantes= ?', [id_estudiantes]);
    res.render('estudiante/modificar', { estuid });

});
router.post('/modificaar/:id_estudiantes', async (req, res) => {
    const { id_estudiantes } = req.params;
    const { nombre_estu, edad, correo } = req.body;
    const updateestu = { nombre_estu, edad, correo };
    await pool.query('update estudiantes set ? where id_estudiantes = ? ', [updateestu, id_estudiantes]);
    res.redirect('/estu/modificar');

});

router.get('/consultar', async(req,res) => {
    const estu = await pool.query('SELECT * FROM estudiantes')
    res.render('estudiante/consultar',{estu});
    
    
});




module.exports =router;