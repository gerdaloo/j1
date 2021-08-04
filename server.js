const e = require('express');
const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('statics'))




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './statics/index.html'))
})



let db = [];


app.post('/', (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;

    if (name && email && password) {
        db.push({name,email,password})
        return res.send({status:'ok',msg:"welcome", users:db})
    }
    res.status(403).send({ status: "err" })

})



app.listen(3001, () => {
    console.log('server is running on 3001')
})