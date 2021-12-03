const jokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/healthcheck", jokeController.healthcheckController);
    app.get("/api/jokes", jokeController.findAllJokes);
    app.post("/api/jokes", jokeController.createJoke);
    app.get("/api/jokes/:id", jokeController.getOneJoke);
    app.put("/api/jokes/:id", jokeController.updateOneJoke);
    app.delete("/api/jokes/:id", jokeController.deleteOneJoke);
} 