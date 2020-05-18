const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio
const app = express();

//configuraciones
app.set('port', process.env.PORT || 8000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    defaultdirs: path.join(app.get('views'), 'layouts'),
    partialsdirs: path.join(app.get('views'), 'partials'),
    extname : '.hbs',
    helpers : require('./lib/handlebars')

}
));
app.set('view engine','.hbs');

//peticiones
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended : false}));
    app.use(express.json());


//variables globales
app.use((req,res,next)=>  {

    next();

});
//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/admin',require('./routes/admins'))
app.use('/estu',require('./routes/estu'))
app.use('/docen',require('./routes/docen'))
app.use('/operaciones',require('./routes/operaciones'));
app.use('/parcial',require('./routes/parcial'));
app.use('/notas',require('./routes/notas'));
app.use('/materia',require('./routes/materia'));
app.use('/periodo',require('./routes/periodo'));
app.use('/asignar',require('./routes/asignar'));
app.use('/parcial2',require('./routes/parcial2'));
app.use('/parcial3',require('./routes/parcial3'));





//public
app.use(express.static(path.join(__dirname, 'public')));
//iniciar el servidor

app.listen(app.get('port'), () => {

    console.log('server on port', app.get('port'));
});
