var express = require('express');
var router = express.Router();
//Simular base de datos
var tablaLibros = {'id':1, 'titulo':'El perfume', 'autor': 'Patrick Súskind'};
var tablaLibros2 = [
                  {'id':1, 'titulo':'El perfume', 'autor': 'Patrick Súskind'},
                  {'id':2, 'titulo':'El hobit', 'autor': 'Tolkien'},
                  {'id':3, 'titulo':'La biblia', 'autor': 'Apostoles'}
                  ];

router.get('/', function(req, res, next) {
      //Aqui se realiza la consulta a la base de datos
      res.status(200).json(tablaLibros2);
});

router.get('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1]);
} );

router.post('/:idLibro', (req,res,next)=>{
    res.status(400).json({'error':'Operacion no permitida'});
} );

router.post('/', (req,res,next)=>{
  console.log(req.body);
  var libro = {
    'id':tablaLibros2[tablaLibros2.length-1]['id']+1,
    'titulo':req.body.titulo,
    'autor':req.body.autor
  };
  //Inserta en la tabla
  tablaLibros2.push(libro);
  //Respuesta de DB al cliente
  res.status(200).json(tablaLibros2[tablaLibros2.length-1]);
});

router.patch('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  tablaLibros2[id-1]['titulo']=req.body.titulo;
  tablaLibros2[id-1]['autor']=req.body.autor;
  res.status(200).json({'Mensaje': 'Actulizado'});
});

module.exports = router;
