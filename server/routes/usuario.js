var mongoose = require('mongoose');
var User = require('../models/user.js');


module.exports = function(app){

    //crear usuario
    app.route('/api/usuario/create').post( (req, res, next) => {
        if (req.body){
            User.create(req.body, (err, result) => {
                if (err) return next(err);
                if (result) {
                    res.status(200).send({
                        'status' : 'OK',
                        'text' : 'Usuario creado'
                    });
                }
            })
        } else {
            res.status(500).send({
                'status' : 'ERR',
                'text' : 'Error al crear el usuario'
            });
        }
    });

    //listar usuarios
    app.route('/api/usuario/list').get( (req, res, next) => {
        User.find((err, result) => {
            if (err) return next(err);
            if (result) {
                res.status(200).send({
                    'status' : 'OK',
                    'text' : 'Usuarios encontrados',
                    'datos': result
                });
            } else {
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'No se encontraron usuarios'
                });
            }
        })
    });

    //listar usuario por cedula
    app.route('/api/usuario/list/:cedula').get( (req, res, next) => {
        User.findOne({'cedula': req.params.cedula}, (err, result) => {
            if (err) return next(err);
            console.log(result);
            if (result) {
                res.status(200).send({
                    'status' : 'OK',
                    'text' : 'Usuarios encontrados',
                    'datos': result
                });
            } else {
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'No se encontraron usuarios'
                });
            }
        })
    });


    //actualizar usuario
    app.route('/api/usuario/update').post((req, res, next) => {
        User.updateOne({'cedula': req.body.cedula},{'nombre': req.body.nombre,
            'apellido': req.body.apellido, 'cedula': '1'}, (err, result) => {
            if (err) return next(err);
            if (result){
                res.status(200).send({
                    'status' : 'OK',
                    'text' : 'Usuario actualizado'
                });
            }else{
                User.create(req.body, function(err, result){
                    if (err) return next(err);
                    res.status(500).send({
                        'status' : 'ERR',
                        'text' : 'Error al actualizar el usuario'
                    });
                })
            }
          });
    });

    //eliminar usuario
    app.route('/api/usuario/delete').post((req, res, next) => {
        User.findOneAndRemove({'cedula': req.body.cedula}, (err,result) => {
            if (err) return next(err);
            if(result){
                res.status(200).send({
                    'status' : 'OK',
                    'text' : 'Usuario Eliminado'
                });  
            }else{
                res.status(500).send({
                    'status' : 'ERR',
                    'text' : 'Error al eliminar el usuario'
                }); 
            }
        })
    })
};