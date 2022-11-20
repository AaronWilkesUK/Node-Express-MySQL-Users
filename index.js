import express from 'express';
import bodyParser from 'body-parser';
import { connectToDB } from './mysql.js';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

//Create database connection to MySQL server.
const dbConfig = {
    host: 'localhost',
    user: 'nodeusers',
    pass: 'nodeusers',
    db: 'nodeusers'
}

connectToDB(dbConfig, (err) => {
    if(!err) {
        app.listen(PORT, () => {
            console.log("Server running on port ", PORT);
        })
    }
})

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Try looking under /users");
})