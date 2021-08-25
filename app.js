const express = require( 'express' )
const app = express()

const port = process.env.PORT || 3333
const router = require( './routes' ) //index.js auto baca

app.set( 'view engine', 'ejs' )
app.use( express.urlencoded ( { extended: true } ) )

app.use( '/', router )

app.listen( port, () => {
  console.log( `running at http://localhost:${port}` )
} ) 