const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())

const con = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        password: 'password',
        database: 'testdbapp',
    }
)

app.post('/register', (req,res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    con.query(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
        [email,username,password], 
        (err,result) => {
            if(err){
                console.log(err);
                return res.status(500).send('Error Registering User')
            }
            res.send('User Registration Successful')
            console.log('User Registration Successful')
        }
    )
})

app.listen(3003, () => {
    console.log('running backend server');
})