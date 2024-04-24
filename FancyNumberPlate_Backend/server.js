const {connectdb} = require('./connect');
const controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

console.log("Server started")
connectdb()
    .then(()=>{console.log('db connected')})
    .catch((err)=>{console.log(err)});


app.post('/api/admin', controller.insertAdmin);
app.post('/api/numberplate', controller.insertNumplate);

app.post('/api/user', controller.insertUser);
app.delete('/api/user/delete/:name',controller.deleteUser);
app.get('/api/user', controller.getallUser);
app.get('/api/user/get/:name',controller.getUser);
// app.put('/api/user/update/:name',controller.updateUser);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at post ${port}`)
})
