/*  Controller */

const db = require("../model/heroes.model");
const Heroe = db.heroes;

//CREATE Operation 
exports.create = (req,res) => {
    if(!req.body){
        req.status(400).send({ message : "El contenido de la petición no puede estar vacío"});
        return;
    }

    Heroe.findOne().sort({ _id: -1}).then(data => {
        var aux = parseInt(data._id) + 1;
        
        // Crear heroe
        const heroe = new Heroe({
            _id: aux,
            nombre: req.body.nombre,
            bio: req.body.bio,
            img: req.body.img,
            aparicion: req.body.aparicion,
            casa: req.body.casa,
            activo: true
        });
        
        heroe.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        });


    });
    
    
};

// Operaciones READ

exports.findAll = (re,res) => {
    Heroe.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        });
};

exports.findOne = (req,res) => {
    const id = req.params.id;

    Heroe.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `No se encontró elemento con id: ${id}`});
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            throwError(res,err);
        });
};

exports.findSome = (req,res) => {
    const termino = req.query.termino;
    var query = termino ? { nombre: { $regex: new RegExp(termino), $options: "i"}, activo: true } : {};

    Heroe.find(query)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        })
};

exports.findActive = (req,res) => {
    Heroe.find({ activo: true})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            throwError(res,err);
        });
};

// Operaciones UPDATE

exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message : "La petición no puede ser vacía"
        });
    }
    const id = req.params.id;

    Heroe.findByIdAndUpdate(id,req.body, { useFindAndModify: false })
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `No se pudo actualizar al heroe con id: ${id}`
            });
        }else{
            res.send({ message: "Heroe actualizado"});
        }
    })
    .catch(err => {
        throwError(res,err);
    });
};

// Operaciones DELETE

exports.delete = (req,res) => {
    const id = req.params.id;

    Heroe.findByIdAndUpdate(id, { activo : false},{ useFindAndModify: false }) //cuando lo encuentre cambia la propiedad activo
        .then(data => {
            if(!data){
                res.status(404).send({
                    message : `No se pudo actualizar el heroe con el id= ${id}`
                });
            }
            else{
                res.send({ message: "Heroe removido"})
            }
        })
        .catch(err => {
            throwError(res,err);
        });
};

function throwError(res, err){
    res.status(500).send({
        message: err.message || "Ocurrió un error en el web server"
    });
}