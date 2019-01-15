const express = require('express');
const path = require('path')
const app = express();
const bodyparser = require('body-parser');
// getting our post routes
const routes = require('./server/routes/routes');
//using middelware
app.use(express.static(path.join(__dirname,'dist/ang-node')));
app.use('/routes',routes);

//catch other route request toreturn it to the index
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'dist/ang-node/index.html'));
})

const port = process.env.PORT || 4600;
app.listen(port,(req,res)=>
{
    console.log(`server running on post ${port}`);

});