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
        this.productService.add(req.body);
        res.redirect(301, '/home/product')
    }
    checkDeleteProduct = (req: Request, res: Response) => {
        res.render('product/delete')
    }
    findIndexById(idPr: any): number {
        let i: number = -1;
        this.productService.getAll().forEach((value, index, array) => {
            if (value.id === idPr) {
                i = index;
            }
        })
        return i;
    }
    deletePr = (req: Request, res: Response) => {
        let idPr = +req.params.id;
        let index = this.findIndexById(idPr)
        this.productService.deleteById(index);
        res.redirect(301, '/home/product');
    }
}

export default new ProductControler()