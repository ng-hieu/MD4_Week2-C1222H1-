import {Router} from 'express'
import productControler from "../controller/productControler";
const router = Router();
router.get('/product', productControler.findAll);
router.get('/create', productControler.showFormAdd);
router.post('/create', productControler.addProduct);
//router.get('/checkDelete', productControler.checkDeleteProduct);
router.get('/deletePr/:id', productControler.deletePr)
router.get('/edit/:id', productControler.productNeedEdit)
router.post('/edit/:id', productControler.productAfEdit)
export default router