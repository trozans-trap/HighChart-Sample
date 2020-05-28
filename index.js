const express = require('express');
const path = require('path');
const app = express();
const chart = require('./public/scripts/chart')
// const Highcharts = require('highcharts');
// require('highcharts/modules/exporting')(Highcharts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.use(express.static('./public/scripts'));
app.get('/',(req,res)=>{
    res.render('high' , { chartJson : chart.json() });
})


app.listen(4000,()=>{
    console.log("running");
})