const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const app = express()
const { v4: uuid } = require('uuid')

app.use( fileUpload() )

app.get('/', (req,res) => {
  res.send("It works!")
})

app.post('/upload', (req,res) => {
  const file = req.files.pic
  const extension = path.extname(file.name)
  const newFileName = uuid() + extension
  const outputPath = path.join("uploads", newFileName)
  file.mv(outputPath)
  
  res.send("Done!")
})


app.listen(9000, () => console.log("Started on 9000"))