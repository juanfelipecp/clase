const express = require('express');
const router = express.Router();
const pool = require("../database")

router.get('/agregar', async (req, res) => {
    const notas = await pool.query('SELECT id_notas,id_estudiantes,id_docentes,id_materia,id_periodo,nota FROM notas')
    const estu = await pool.query('SELECT * FROM estudiantes')
    const docen = await pool.query('SELECT id_docente,nombre_docen,edad,correo FROM docentes')
    const materia = await pool.query('SELECT id_materia,materia FROM materia')
    const periodo = await pool.query('SELECT id_periodo,periodo FROM periodo_academico')
    res.render('notas/agregar', { notas, estu, docen, materia, periodo });
});
router.post("/agregar", async (req, res) => {
    const { id_notas, id_estudiantes, id_docentes, id_materia, id_periodo, nota } = req.body;
    const newUser = { id_notas, id_estudiantes, id_docentes, id_materia, id_periodo, nota };

    await pool.query("insert into notas set ?", [newUser]);
    res.redirect("/notas/agregar");
});




router.get('/eliminar', async (req, res) => {
    const notas = await pool.query('SELECT id_notas,id_estudiantes,id_docentes,id_materia,id_periodo,nota FROM notas')
    res.render('notas/eliminar', { notas });

});

router.get('/eliminar/:id_notas', async (req, res) => {
    const { id_notas } = req.params;
    await pool.query('delete from notas where id_notas= ?', [id_notas]);
    res.redirect('/notas/eliminar');

});

router.get('/modificar', async(req, res) => {
    const notas = await pool.query('SELECT id_notas,id_estudiantes,id_docentes,id_materia,id_periodo,nota FROM notas')
    res.render('notas/modificar', { notas });

});

router.get('/modificar/:id_notas', async (req, res) => {
    const { id_notas } = req.params;
    const notasid = await pool.query('SELECT * FROM notas WHERE id_notas= ?', [id_notas]);
    res.render('notas/modificar', { notasid });

});
router.post('/modificaar/:id_notas', async (req, res) => {
    const { id_notas } = req.params;
    const { nota} = req.body;
    const updatenota = { nota };
    await pool.query('update notas set ? where id_notas = ? ', [updatenota, id_notas]);
    res.redirect('/notas/modificar');

});

router.get('/consultar', (req, res) => {

    res.render('notas/consultar');

});




module.exports = router;