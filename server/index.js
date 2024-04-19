const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors)

const con = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        password: '',
        database: 'testdbapp',
    }
)

app.post('/register', (req,res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query('INSERT INTO users (email, username, password) VALUES(?,?,?)', [email,username,password],
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: 'ENTER CORRECT ASKED DETAILS!'})
            }
        }
    )
})

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    con.query('SELECT * FROM users WHERE username = ? AND password = ?', [username,password],
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: 'ENTER CORRECT ASKED DETAILS!'})
            }
        }
    )
})

app.post('/', (req,res) => {
    console.log('fuh')
    res.send('yeo')
})

app.listen(3003, () => {
    console.log('running backend server');
})