import { getDB } from '../mysql.js';

export const createUsersTable = (req, res) => {
    const sql = "CREATE TABLE IF NOT EXISTS users(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), age int, PRIMARY KEY(id))";
    getDB().query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
}

export const getUsers = (req, res) => {
    const sql = "SELECT * FROM users";
    getDB().query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
}

export const createUser = (req, res) => {
    const sql = "INSERT INTO users SET ?";
    getDB().query(sql, req.body, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
}

export const getUser = (req, res) => {
    const {id} = req.params;
    const sql = `SELECT * FROM users WHERE id = ${id}`;
    getDB().query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM users WHERE id = ${id}`;
    getDB().query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const sql = `UPDATE users SET ? WHERE id = ${id}`;
    const { firstName, lastName, age} = req.body;
    const user = {}

    if(firstName) {
        user.firstName = firstName;
    }

    if(lastName) {
        user.lastName = lastName;
    }

    if(age) {
        user.age = age;
    }

    getDB().query(sql, user, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
}