import respostaController from "../controllers/respostaController.js";

export function respostasRoutes(router) {
    router.get("/respostas", respostaController.mostrarRespostas);
    router.get("/respostas/:id", respostaController.mostrarRespostaEspecifica);
    router.post("/respostas/:id", respostaController.enviarRespostas);
}