const express = require('express');
const router = express.Router();
const pool = require("../database")

router.get('/perfil', async (req, res) => {
    const { id_publicacion } = req.params;
    const publi = await pool.query('SELECT * FROM publicaciones')
    const perfil = await pool.query('SELECT * FROM perfil')
    res.render('parcial3/perfil',{perfil,publi,id_publicacion});

});

router.post('/perfil/publicar',async(req,res)=>{
    const {id_publicacion,publicacion,nombre,likes }= req.body;
    const newpubli = {id_publicacion,publicacion,nombre,likes};
    await pool.query("insert into publicaciones set ?", [newpubli]);
    res.redirect("/parcial3/perfil");


});
router.post('/perfil/like/:id_publicacion', async (req, res) => {
    const { id_publicacion } = req.params;
    const { likes } = req.body +1;
    const updatelike = { likes };
    await pool.query('update peticiones set ? where id_publicacion = ? ', [updatelike, id_publicacion]);
    res.redirect('/parcial3/perfil');

});




module.exports = router;
 