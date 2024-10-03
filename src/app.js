const express = require("express");
const app = express();
const urls = require("./data/urls-data")
const urlsRouter = require("./urls/urls.router")
const uses = require("./data/uses-data")
const usesRouter = require("./uses/uses.router")

app.use(express.json());
app.use("/uses", usesRouter)
app.use("/urls", urlsRouter)

app.use((req, res, next) => {
  return next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

app.use((err,req,res,next)=>{
  console.error(err)
  const {status = 500, message = "Something went wrong!"} = err
  res.status(status).json({error: message})
})

// TODO: Add code to meet the requirements and make the tests pass.

module.exports = app;
