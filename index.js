const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('index.html')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Estou rodando na porta 3000')
})