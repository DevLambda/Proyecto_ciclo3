const express = require('express');
var ObjectID = require('mongodb').ObjectID;

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This section will help you get a list of all the records.
recordRoutes.route('/usuarios').get(async function (req, res) {
  // Get records
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('usuarios')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching usuarioss!');
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new record.
recordRoutes.route('/usuarios/create').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const usuarios = {
    id_usuario: req.body.id_usuario,
    given_name: req.body.given_name,
    family_name: req.body.family_name,
    email: req.body.email,
    rol: req.body.rol,
    estado: req.body.estado,
  };

  dbConnect.collection('usuarios').insertOne(usuarios, function (err, result) {
    if (err) {
      res.status(400).send('Error inserting usuarios!');
    } else {
      console.log(`Added a new usuarios with id ${result.insertedId}`);
      res.json({ id: result.insertedId });
    }
  });
});

// This section will help you update a record by id.
recordRoutes.route('/usuarios/update').patch(function (req, res) {
  const dbConnect = dbo.getDb();
  const _idusuario = { _id: new ObjectID(req.body._id) };
  delete req.body._id;
  const updates = { $set: req.body };
  dbConnect
    .collection('usuarios')
    .findOneAndUpdate(
      _idusuario,
      updates,
      { new: true, upsert: true, returnOriginal: false },
      function (err, _result) {
        if (err) {
          res.status(400).send(`Error updating likes on listing with id ${usuarios.id}!`);
        } else {
          console.log('1 usuarios updated');
          res.json({ result: _result });
        }
      }
    );
});

// This section will help you delete a record
recordRoutes.route('/usuarios/delete').delete((req, res) => {
  // Delete documents
  const dbConnect = dbo.getDb();
  const usuariosQuery = { _id: new ObjectID(req.body._id) };

  dbConnect.collection('usuarios').deleteOne(usuariosQuery, function (err, _result) {
    if (err) {
      res.status(400).send(`Error deleting listing with id ${usuariosQuery._id}!`);
    } else {
      console.log('1 document deleted');
      res.json({ status: 'deletion successful' });
    }
  });
});

module.exports = recordRoutes;