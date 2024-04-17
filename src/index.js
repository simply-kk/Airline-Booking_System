const express = require('express');
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json()); // to support JSON-
    app.use(bodyParser.urlencoded({ extended: true })); 

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
        // console.log(process.env.PORT)
    })

}
setupAndStartServer();