import {Router} from 'express'
import productControler from "../controller/productControler";
const router = Router();
router.get('/product', productControler.findAll);
router.get('/create', productControler.showFormAdd);
router.post('/create', productControler.addProduct);
//router.get('/checkDelete', productControler.checkDeleteProduct);
router.get('/deletePr/:id', productControler.deletePr)
export default router