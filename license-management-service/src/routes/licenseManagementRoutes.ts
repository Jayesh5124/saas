import { Router } from 'express';
import { LicenseManagementController } from '../controllers/licenseManagementController';

const router = Router();

router.get('/licenses', LicenseManagementController.getAllLicenses);
router.post('/licenses', LicenseManagementController.addLicense);
router.get('/licenses/:id', LicenseManagementController.getLicenseById);
router.put('/licenses/:id', LicenseManagementController.updateLicense);
router.delete('/licenses/:id', LicenseManagementController.deleteLicense);
router.patch('/licenses/:id/recalculate', LicenseManagementController.recalculateLicenses);

export default router;
