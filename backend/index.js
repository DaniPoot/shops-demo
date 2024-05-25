import 'dotenv/config'
import { app } from './src/server.js'

app.listen({
  port: process.env.PORT || 3001,
  host: '0.0.0.0'
},
function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
