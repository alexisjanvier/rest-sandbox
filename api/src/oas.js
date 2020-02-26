const express = require('express')

const data = require('./petroleuses.json');
const app = express()
const port = 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('The Fabulous Roller Derby API'));

    responses:
      "200":
        description: Une liste de joueurs.euses.
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: "../schemas/player.yaml#/Player"
Player:
  description: "Un.e joueur.euse de Roller Derby"
  type: object
  properties:
    id:
      type: string
      readOnly: true
    name:
      type: string
      minLength: 3
      maxLength: 50
    number:
      type: integer
      maximum: 9999
      format: int32
    picture:
      type: string
      nullable: true

/* @oas [get] /players
 * description: "Filters to apply to query. It's a stringified json object, with key/value filter separated by comma"
 * parameters:
 * - (query) filter {string} Filters to apply to query returned
 * responses:
 *   "200":
 *     description: Une liste de joueurs.euses.
 *     content:
 *       application/json:
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 readOnly: true
 *               name:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 50
 *               number:
 *                 type: integer
 *                 maximum: 9999
 *                 format: int32
 *               picture:
 *                 type: string
 *                 nullable: true
 */
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


app.listen(port, () => console.log(`The Fabulous Roller Derby API listening on port ${port}!`))

