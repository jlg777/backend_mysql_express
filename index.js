const port = 3000
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const usuariosRouter = require('./src/routes/usuariosRoutes')
const loginRouter = require('./src/routes/loginRouter')
const contactoRouter = require('./src/routes/contactoRoutes')
const posteoRouter = require('./src/routes/posteoRouter')
const productosRouter = require('./src/routes/productosRouter')
const comprasRouter = require('./src/routes/comprasRouter')
const path = require('path')
const cors = require('cors')
const upload = require('./src/utils/multerConfig')
require('dotenv').config()

app.use(cors())

app.use(express.json())

app.use(cookieParser())

app.use('/usuarios', usuariosRouter)
app.use('/login', loginRouter)
app.use('/contacto', contactoRouter)
app.use('/posteos', posteoRouter)
app.use('/productos', productosRouter)
app.use('/compras', comprasRouter)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Servidor ejecutandose en el http://localhost:${port}`)
})
