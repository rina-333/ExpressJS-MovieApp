const express = require( 'express' )
const app = express()

const PORT = process.env.PORT || 3333
const router = require( './routes' ) //index.js auto baca

app.set( 'view engine', 'ejs' )
app.use( express.urlencoded ( { extended: true } ) )

app.use( '/', router )

app.listen( PORT, () => {
  console.log( `running at http://localhost:${port}` )
} ) 