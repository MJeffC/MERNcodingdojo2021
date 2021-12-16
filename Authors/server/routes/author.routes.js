const authorController = require("../controllers/author.controller");

module.exports = app => {
    app.get("/api/healthcheck", authorController.healthcheckController);
    app.post("/api/author", authorController.createAuthor);
    app.get("/api/author", authorController.findAllAuthors);
    app.get("/api/author/:id", authorController.getOneAuthor);
    app.put("/api/author/:id", authorController.updateOneAuthor);
    app.delete("/api/author/:id", authorController.deleteOneAuthor);
}