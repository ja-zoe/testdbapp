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

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('MYSql db Connected!')
    }
})

app.post('/register', (req,res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    con.query(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
        [email,username,password], 
        (err,result) => {
            if(err){
                if(err.code=='ER_DUP_ENTRY'){
                    return res.send({message:'Already a user with that username or email', err: err.code})
                }
                console.log(err);
                return res.send('Error Registering User')
            }
            res.send('User Registration Successful')
            console.log('User Registration Successful')
        }
    )
})


app.post('/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    con.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username,password],
        (err,result) => {
            if(err){
                res.send({err: err.code})
            }

            if(result.length > 0) {
                res.send(result)
                console.log('User log in succesful!')
            }else{
                res.send({message: 'Wrong username/password combination!'})
            }
            
        }
    )
})

app.listen(3003, (err) => {
    if(err){
        console.log(err)
    }
    console.log('running backend server');
})