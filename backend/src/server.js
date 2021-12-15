const express = require('express')
const path = require('path')

const PORT = process.env.SERVER_PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, '../clientBuild')))

app.get("*/", function(req, res){
    res.sendFile(path.join( __dirname, '../clientBuild', 'index.html'))
})


try {
    app.listen(PORT, () => {
      console.log(
        `Now listening on http://localhost:${PORT}/`
      )
    })
  } catch (e) {
    console.error(e)
  }


app.use((req, res, next) => {
  next(createError(404))
})