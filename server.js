const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3000

// Serve files with their exact names (e.g. /iom_test.html)
app.use(express.static(path.join(__dirname)))

// Also serve extensionless requests (e.g. /iom_test → iom_test.html)
app.use((req, res, next) => {
  const htmlFile = path.join(__dirname, req.path + '.html')
  if (fs.existsSync(htmlFile)) {
    res.sendFile(htmlFile)
  } else {
    next()
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
