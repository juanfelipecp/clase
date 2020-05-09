const express = require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar', async (req, res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/agregar', { docen });
});
router.post("/agregar", async (req, res) => {
    const { id_docente, nombre_docen, edad, correo } = req.body;
    const newUser = { id_docente, nombre_docen, edad, correo };

    await pool.query("insert into docentes set ?", [newUser]);
    res.redirect("/docen/agregar");
});


router.get('/eliminar', async (req, res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/eliminar', { docen });


});


router.get('/eliminar/:id_docente', async (req, res) => {
    const { id_docente } = req.params;
    await pool.query('delete from docentes where id_docente=?', [id_docente]);
    res.redirect('/docen/eliminar');



});




router.get('/modificar/', async (req, res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/modificar', { docen });
});

router.get('/modificar/:id_docente', async (req, res) => {
    const { id_docente } = req.params;
    const docenid = await pool.query('SELECT * FROM docentes WHERE id_docente= ?', [id_docente]);
    res.render('docentes/modificar', { docenid });

});
router.post('/modificaar/:id_docente', async (req, res) => {
    const { id_docente } = req.params;
    const { nombre_docen, edad, correo } = req.body;
    const updatedocen = { nombre_docen, edad, correo };
    await pool.query('update docentes set ? where id_docente =? ', [updatedocen, id_docente]);
    res.redirect('/docen/modificar');

});

router.get('/consultar', async (req, res) => {
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    res.render('docentes/consultar', { docen });

});




module.exports = router;