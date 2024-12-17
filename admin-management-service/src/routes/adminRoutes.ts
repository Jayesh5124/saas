import { Router } from 'express';
import { getUsers, createUser } from '../controllers/adminController';


const router = Router();

//router.use(authenticate);
// router.get('/users', authorize(['admin']), getUsers);
// router.post('/users', authorize(['admin']), createUser);
router.get('/users',  getUsers);
router.post('/users',  createUser);

// Additional routes can be added here

export default router;
