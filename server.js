const express = require('express')
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const pokemon = require('./models/pokemon')
app.set('view engine','jsx')
app.engine('jsx' , reactViews.createEngine())
app.get('/',(req, res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res)=>{
    res.render('Index',{pokemon})
})
// app.get('/pokemon/:id',(req,res)=>{
//     res.send(req.params.id)
// })
app.get('/pokemon/:indexOfPokemon', (req ,res)=>{
    res.render("Show" , pokemon[req.params.indexOfPokemon])
})
app.listen(PORT,() =>{
    console.log(`Listening on port:${PORT}`)
})