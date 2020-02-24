const express = require('express')
const OpenApiValidator = require('express-openapi-validator').OpenApiValidator;

const data = require('./petroleuses.json');
const apiSpec = require('../../openapi/openapi.json');
const app = express()
const port = 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => res.send('The Fabulous Roller Derby API'));

new OpenApiValidator({
  apiSpec,
  validateRequests: true,
  validateResponses: true,
})
    .install(app)
    .then(() => {
        app.get('/players', function (req, res) {
            res.json(data);
        })
        app.post('/players', function (req, res) {
            res.json(data[0]);
        })
        app.get('/players/:playerId', function (req, res) {
            res.json(data.find(d => d.id === req.params.playerId));
        })
        app.put('/players/:playerId', function (req, res) {
            res.json(data.find(d => d.id === req.params.playerId));
        })
        app.delete('/players/:playerId', function (req, res) {
            res.json(data.find(d => d.id === req.params.playerId));
        })

        app.use((err, req, res, next) => {
            res.status(err.status || 500).json({
                message: err.message,
                errors: err.errors,
            });
        });

    });

app.listen(port, () => console.log(`The Fabulous Roller Derby API listening on port ${port}!`))
