"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductControler {
    constructor() {
        this.findAll = async (req, res) => {
            let listProductService = await this.productService.getAll();
            res.render('index', { listProducts: listProductService });
        };
        this.showFormAdd = (req, res) => {
            res.render('product/create');
        };
        this.addProduct = (req, res) => {
            this.productService.addPr(req.body);
            res.redirect(301, '/home/product');
        };
        this.deletePr = (req, res) => {
            let id = req.params.id;
            this.productService.deleteById(id);
            res.redirect(301, '/home/product');
        };
        this.productNeedEdit = async (req, res) => {
            console.log('checkk');
            let id = req.params.id;
            console.log(id);
            let productEdit = await this.productService.showProductEdit(id);
            res.render('product/edit', { product: productEdit });
        };
        this.productAfEdit = async (req, res) => {
            let id = req.params.id;
            let product = req.body;
            await this.productService.productEdit(id, product);
            res.redirect(301, '/home/product');
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductControler();
//# sourceMappingURL=productControler.js.map