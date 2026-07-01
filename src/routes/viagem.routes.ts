import { ViagemController } from "../controller/viagem.controller";
import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";


const router = Router();
const viagemController = new ViagemController();

//Aqui acontece o "Meio do caminho" (middle). Antes de acessar algum rota /viagem, o middleware é chamado
// .use intercepta todas as requisições. 
router.use(authMiddleware);

router.post('/',viagemController.create);
router.delete('/:id',viagemController.delete);
router.get('/',viagemController.findAll);
router.get('/:id',viagemController.findById);
router.put('/:id',viagemController.update);

export {router as viagemRoutes};