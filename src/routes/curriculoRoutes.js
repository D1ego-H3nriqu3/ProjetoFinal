import curriculoController from "../controllers/curriculoController.js";

export function curriculoRoutes(router) {
    router.get("/curriculos", curriculoController.mostrarCurriculos);
    router.get("/curriculos/:id", curriculoController.mostrarCurriculoEspecifico);
    router.post("/curriculos", curriculoController.criarCurriculo);
    router.put("/curriculos/:id", curriculoController.atualizarCurriculo);
    router.delete("/curriculos/:id", curriculoController.excluirCurriculo);
}
