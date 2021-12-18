const petController = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/healthcheck", petController.healthcheckController);
    app.post("/api/pet", petController.createPet);
    app.get("/api/pet", petController.findAllPets);
    app.get("/api/pet/:id", petController.getOnePet);
    app.put("/api/pet/:id", petController.updateOnePet);
    app.delete("/api/pet/:id", petController.deleteOnePet);
}