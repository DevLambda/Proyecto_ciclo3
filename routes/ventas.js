const express = require('express');
var ObjectID = require('mongodb').ObjectID;

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This section will help you get a list of all the records.
recordRoutes.route('/ventas').get(async function (req, res) {
  // Get records
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('ventas')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching ventas!');
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new record.
recordRoutes.route('/ventas/create').post(function (req, res) {
  const dbConnect = dbo.getDb();
 
  const ventas = {
    ced_cliente: req.body.ced_cliente,
    nombre_cliente: req.body.nombre_cliente,
    tel_cliente: req.body.tel_cliente,
    fecha_venta: req.body.fecha_venta,
    fecha_pago: req.body.fecha_pago,
    quantity: req.body.quantity,
    estado_venta: req.body.estado_venta,
    totalVenta:req.body.totalVenta,
    vendedor: req.body.vendedor
  };

  dbConnect.collection('ventas').insertOne(ventas, function (err, result) {
    if (err) {
      res.status(400).send('Error inserting ventas!');
    } else {
      console.log(`Added a new ventas with id ${result.insertedId}`);
      res.json({ id: result.insertedId });
    }
  });
});

// This section will help you update a record by id.
recordRoutes.route('/ventas/update').patch(function (req, res) {
  const dbConnect = dbo.getDb();
  const ventas = { _id: new ObjectID(req.body._id) };
  delete req.body._id;
  const updates = { $set: req.body };
  dbConnect
    .collection('ventas')
    .findOneAndUpdate(
      ventas,
      updates,
      {new: true, upsert: true, returnOriginal: false },
      function (err, _result) {
        if (err) {
          res.status(400).send(`Error updating likes on listing with id ${ventas._id}!`);
        } else {
          console.log('1 ventas updated');
          res.json({ result: _result });
        }
      }
    );
});


module.exports = recordRoutes;
