import entrevistaController from "../controllers/entrevistaController.js";

export function entrevistaRoutes(router) {
    router.get("/entrevistas", entrevistaController.mostrarEntrevistas);
    router.get("/entrevistas/:id", entrevistaController.mostrarEntrevistaEspecifica);
    router.post("/entrevistas", entrevistaController.criarEntrevista);
    router.put("/entrevistas/:id", entrevistaController.atualizarEntrevista);
    router.delete("/entrevistas/:id", entrevistaController.excluirEntrevista);
    router.get("/entrevistas-Especificas/:id", entrevistaController.encontrarEntrevistaVagaAplicada)
}