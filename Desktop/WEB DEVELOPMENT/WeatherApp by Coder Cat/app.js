const express = require(`express`);
const bodyParser = require(`body-parser`)
const request = require(`request`)
const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'));

app.set(`view engine`, 'ejs');


let array = '';






app.post(`/`, (req,res)=>{

    
    array = req.body.city;
    const key = `bce930ee274714a6b37226576e6ac625 `
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${array}&units=metric&appid=${key}`
   
    request(url, function (err, response, body){
       if(err){
           console.log(err);
           
       }else{
           let weather = JSON.parse(body);
           if(weather.main == undefined){
            res.render(`index`, {array:`Please Enter a Valid City `});
           }
           else{
        
            array =  `${array.toUpperCase()} is ${Math.floor(weather.main.temp)} degree`;
            res.render(`index`, {array:array})
           }
       }
    })
   
    
})

app.get(`/`, (req,res)=>{
    array = ``
    res.render(`index`,{array:array})
    console.log();
    
})

app.get(`/weather`, (req,res)=>{

    
    res.render(`weather`, {array:array})
    console.log(array);
    
})
app.listen(5000)