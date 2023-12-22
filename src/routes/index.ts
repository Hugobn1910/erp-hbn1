import { Router } from 'express';
import * as pg_inicial from '../controllers/pg_inicial';
import * as pg_pesquisa from '../controllers/pg_pesquisa';

const router = Router();

router.get('/', pg_inicial.home);
router.get('/pedidos_pendentes', pg_inicial.pedidos_pendentes);
router.get('/pedidos', pg_inicial.pedidos);
router.get('/solicitacoes', pg_inicial.solicitacoes);
router.get('/medicoes', pg_inicial.medicoes);


router.get('/', (req, res)=>{
    res.send('home');
});

export default router;