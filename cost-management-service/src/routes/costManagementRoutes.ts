import { Router } from "express";
import { CostManagementController } from "../controllers/cost_management_contrller";


const router = Router();

router.get('/costs', CostManagementController.getAllCosts);
router.post('/costs', CostManagementController.addCost);
router.get('/costs/:id', CostManagementController.getCostById);
router.put('/costs/:id', CostManagementController.updateCost);
router.delete('/costs/:id', CostManagementController.deleteCost);

export default router;
