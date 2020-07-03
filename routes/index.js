var express = require("express");
var router = express.Router();
const models = require("../database/models");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", async function (req, res, next) {
  const articuloACrear = req.body;
  try {
    await models.Articulo.create(articuloACrear)
  } catch (error) {
    res.render("error", {mensaje: error});
  }
  // Creo el articulo con el cuerpo de la request
  res.render("index", { title: "Express" });
});

router.get("/articulos", 
  async (req, res) => {
    try {
      const listadoArticulos = await models.Articulo.findAll();
      return res.render('listado', {listadoArticulos})
    } catch (error) {
      return res.send('Error')
    }
  }
)

router.get("/articulos/:id", 

  async (req, res) => {
      const articulo = await models.Articulo.findByPk(req.params.id);
      return res.render('form', {articulo})
  }

)

router.put("/articulos/editar/:id",
async (req, res) => {

  
console.log(req.body)
  await models.Articulo.update(
    req.body, 
    {where: {id:req.params.id}});

  const listadoArticulos = await models.Articulo.findAll();
  return res.render('listado', {listadoArticulos})



})

module.exports = router;
