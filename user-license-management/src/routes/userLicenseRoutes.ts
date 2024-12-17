import { Router } from 'express';
import { UserLicenseController } from '../controllers/userLicenseController';

const router = Router();

router.get('/licenses', UserLicenseController.getAllLicenses);
router.post('/licenses', UserLicenseController.addLicense);
router.get('/licenses/:id', UserLicenseController.getLicenseById);
router.put('/licenses/:id', UserLicenseController.updateLicense);
router.delete('/licenses/:id', UserLicenseController.deleteLicense);

export default router;
