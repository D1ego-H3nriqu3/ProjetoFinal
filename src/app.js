import express from "express";
import { registrarLog } from "./middlewares/registrarLog.js";
import { curriculoRoutes } from "./routes/curriculoRoutes.js";
import { entrevistaRoutes } from "./routes/entrevistaRoutes.js";
import { respostasRoutes } from "./routes/respostasRoutes.js";

let router = express();

router.use(express.json());

// router.use aplica o middleware em TODAS as rotas
router.use(registrarLog);

// Rotas: cada recurso cadastra as suas
curriculoRoutes(router);
entrevistaRoutes(router);
respostasRoutes(router)

export default router;
