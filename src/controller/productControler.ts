import {Request, Response} from 'express'
import ProductService from "../service/productService";


class ProductControler {
    private productService

    constructor() {
        this.productService = ProductService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProductService = await this.productService.getAll();
        res.render('index', {listProducts: listProductService});
    }
    showFormAdd = (req: Request, res: Response) => {
        res.render('product/create')
    }
    addProduct = (req: Request, res: Response) => {
        this.productService.addPr(req.body);
        res.redirect(301, '/home/product')
    }

    deletePr = (req: Request, res: Response) =>{
        let id = req.params.id;
        // console.log('checkkk')
        // console.log(id)
        this.productService.deleteById(id);
        res.redirect(301, '/home/product');
    }
    productNeedEdit = async (req: Request, res: Response) =>{
        console.log('checkk')
        let id = req.params.id;
        console.log(id)
        let productEdit = await this.productService.showProductEdit(id);
        res.render('product/edit', {product: productEdit});
    }
    productAfEdit = async (req: Request, res: Response) =>{

        let id = req.params.id;
        let product = req.body;
        await this.productService.productEdit(id, product);
        res.redirect(301, '/home/product')
    }
}

export default new ProductControler()