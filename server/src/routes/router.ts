import { Router } from "express";

// importa as rotas
import userRoutes from './userRoutes';
import postRoutes from './postRoutes';

const router = Router();

router.use("/user", userRoutes);

router.use('/post', postRoutes);


export default router;
