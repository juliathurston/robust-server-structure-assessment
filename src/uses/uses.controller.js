const path = require("path");
const uses = require(path.resolve("src/data/uses-data"));

function list(req,res){
  res.json({data: uses})
}

function useExists(req, res, next) {
  const useId = Number(req.params.useId);
  const foundUse = uses.find((use) => use.id === Number(useId));
  if (foundUse) {
    res.locals.use = foundUse
    return next();
  }
  next({
    status: 404,
    message: `Note id not found: ${req.params.useId}`,
  });
}

function read(req, res) {
  res.json({ data: res.locals.use});
}

function destroy(req, res) {
  const { useId } = req.params;
  const index = uses.findIndex((use) => use.id === Number(useId));
  if (index > -1) {
    uses.splice(index, 1);
  }
  res.sendStatus(204);
}

module.exports ={
  list,
  read: [useExists, read],
  destroy: [useExists, destroy]
}
