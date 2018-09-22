var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/horizontesDB', { useNewUrlParser: true });

var Diagnosticos = require('./model/diagnosticos');
var PacienteDiagnostico = require('./model/pacienteDiagnostico');
var Pacientes = require('./model/pacientes');
var Areas = require('./model/areas');
var Consultorios = require('./model/consultorios');
var DiasLaborales = require('./model/diasLaborales');
var Domicilios = require('./model/domicilios');
var NroTurnos = require('./model/nroTurnos');
var Profesionales = require('./model/profesionales');
var RegistroTurnos = require('./model/registroTurnos');
var TipoUsuarios = require('./model/tipoUsuarios');
var Usuarios = require('./model/usuarios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//DIAGNOSTICOS

app.post('/diagnosticos', function(request, response){
	var diagnosticos = new Diagnosticos();
	diagnosticos.diagnostico = request.body.diagnostico;
    
	diagnosticos.save(function(err, saveDiagnostico){
		if(err){
			response.status(500).send({error:"ERROR no se pudo guardar diagnostico"});
		}else{
			response.status(200).send(saveDiagnostico);
		}
	});
});

app.get('/diagnosticos', function(request,response){	
	Diagnosticos.find({}, function(err, diagn){
		if(err){
			response.status(500).send({error:"No se pudo traer los diagnosticos"});
		}else{
			response.send(diagn);
		}
	});
});


//DOMICILIO

app.post('/domicilios', function(request, response){
	var domicilios = new Domicilios();
	domicilios.direccion = request.body.direccion;
    domicilios.localidad = request.body.localidad;
    domicilios.ciudad = request.body.ciudad;
    domicilios.pais = request.body.pais;
    
	domicilios.save(function(err, saveDomicilio){
		if(err){
			response.status(500).send({error:"ERROR no se pudo guardar domicilio"});
		}else{
			response.status(200).send(saveDomicilio);
		}
	});
});

app.get('/domicilios', function(request,response){	
	Domicilios.find({}, function(err, domicilio){
		if(err){
			response.status(500).send({error:"No se pudo traer los domicilios"});
		}else{
			response.send(domicilio);
		}
	});
});



//PACIENTES

app.post('/pacientes', function(request, response){
    var pacientes = new Pacientes();
    var dom = Domicilios.findOne({},{ sort: { 'created_at' : -1 } }, function(err, domicilios){
		if(err){
			response.status(500).send({error:"No se pudo encontrar domicilio"});
		}else{
			response.send(pacientes);
		}
	});
	
	pacientes.nombre = request.body.nombre;
    pacientes.apellido = request.body.apellido;
    pacientes.dni = request.body.dni;
    pacientes.nroObraSocial = request.body.nroObraSocial;
    pacientes.autonomia = request.body.autonomia;
    pacientes.observaciones = request.body.observaciones;
    pacientes.domicilio = dom._id;
    
	pacientes.save(function(err, savePacientes){
		if(err){
			response.status(500).send({error:"ERROR no se pudo guardar paciente"});
		}else{
			response.status(200).send(savePacientes);
		}
	});
});

app.get('/pacientes', function(request,response){	
	Pacientes.find({}, function(err, pacientes){
		if(err){
			response.status(500).send({error:"No se pudo traer lista de pacientes"});
		}else{
			response.send(pacientes);
		}
	});
});



//AREAS

app.post('/areas', function(request, response){
	var areas = new Areas();
	areas.nombreArea = request.body.nombreArea;
    
	areas.save(function(err, saveArea){
		if(err){
			response.status(500).send({error:"ERROR no se pudo guardar area"});
		}else{
			response.status(200).send(saveArea);
		}
	});
});

app.get('/areas', function(request,response){	
	Areas.find({}, function(err, area){
		if(err){
			response.status(500).send({error:"No se pudo traer las areas"});
		}else{
			response.send(area);
		}
	});
});

//TIPOUSUARIOS

app.post('/tipoUsuarios', function(request, response){
	var tipoUsuarios = new TipoUsuarios();
	tipoUsuarios.descripcion = request.body.descripcion;
    
	tipoUsuarios.save(function(err, saveTipoU){
		if(err){
			response.status(500).send({error:"ERROR no se pudo guardar el tipo de usuario"});
		}else{
			response.status(200).send(saveTipoU);
		}
	});
});


app.get('/tipoUsuarios', function(request,response){	
	TipoUsuarios.find({}, function(err, tipos){
		if(err){
			response.status(500).send({error:"No se pudo traer los tipos de usuarios"});
		}else{
			response.send(tipos);
		}
	});
});





/////////////////////////////////////////////////////////////////////////
app.listen(3000, function(){
    console.log("Horizontes API running on port 3000");
});