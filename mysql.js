import mysql from 'mysql';

let dbConn;

export const connectToDB = (dbConfig, cb) => {
    const {host, user, pass, db} = dbConfig;
    //Create Database Connection
    dbConn = mysql.createConnection({
        host     : host,
        user     : user,
        password : pass,
        database : db
    })
    //Connect To The Database
    dbConn.connect((err) => {
        if(err){
            console.log(err);
            return cb(err);
        }
        return cb();
    });
}

export const getDB = () => {
    return dbConn;
}