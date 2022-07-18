const db = require('../config/dbconfig');

exports.addPlayer = (request, response) => {
  db.insert(
    {
      table: 'players',
      records: [
        {
          name: request.body.name,
          number: request.body.number,
          position: request.body.position
        }
      ]
    },
    (err, res) => {
      if (err) response.status(500).json(err);

      response.status(res.statusCode).json(res.data);
    }
  )
}