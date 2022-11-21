require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const Pokemon = require('./models/pokemon')
const reactViews = require('express-react-views')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

app.set('view engine', 'jsx')

app.engine('jsx', reactViews.createEngine())

app.use((req, res, next) => {
    next()
})

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPoke) => {
        if (!error) {
            res.status(200).render('Index', {
                pokemon: allPoke
            })

        } else {
            res.status(400).send(error)
        }
    })
    // res.render('Index',{pokemon})
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

app.post("/pokemon", (req, res) => {

    Pokemon.create(req.body, (error, createdpoke) => {
        if (!error) {

            res.status(200).redirect("/pokemon")
        } else {
            res.status(400).send(error)
        }
    })
})

app.get("/pokemon/:id", (req, res) => {
    //res.render('Show' ,Pokemon[req.params.id])
    Pokemon.findById(req.params.id, (error, foundPoke) => {
        if (!error) {
            res.status(200).render('Show', { pokemon: foundPoke })

        }
        else {
            res.status(400).send(error)
        }

    })
})
// app.get('/pokemon/:indexOfPokemon', (req ,res)=>{
//     res.render("Show" , pokemon[req.params.indexOfPokemon])
// })
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`)
})