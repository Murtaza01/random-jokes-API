import express from 'express'
import axios from 'axios'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const { data } = await axios.get('https://v2.jokeapi.dev/joke/Any')
    console.log(data)
    res.render('index', { data })
})



app.listen(port, () => {
    console.log('listing on port:' + port)
})