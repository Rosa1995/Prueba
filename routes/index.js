var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mensaje', function(req,res,next){
  res.render('mensaje',{"txtMensaje":"","msg":""});
});

var mensajes = [];

router.post('/mensaje',function(req,res,next){
  console.log(req.body);
    mensajes.push(req.body.txtMensaje.concat( "Prueba");
    var msgs = mensajes;
    var rtObject = {};
    rtObject.txtMensaje = req.body.txtMensaje;
    rtObject.msg= msgs;
  res.render('mensaje', rtObject);
});


router.get('/api/datos', function(req,res,next){
  var datos = {"Nombre":"Rosa","Apellido":"Sandoval","direccion":"San ignacio F:M","correo":"sandorosa1@gmail.com"};
  res.json(datos);

});

module.exports = router;
