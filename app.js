const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', function (req, res) {
    res.send('Bem -vindo ao Express!')
})
app.listen(PORT, function (){
    console.log('Aplicação no ar em http://localhost:'+ PORT);
});
