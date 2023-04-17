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
            this.productService.add(req.body);
            res.redirect(301, '/home/product');
        };
        this.checkDeleteProduct = (req, res) => {
            res.render('product/delete');
        };
        this.deletePr = (req, res) => {
            let idPr = +req.params.id;
            let index = this.findIndexById(idPr);
            this.productService.deleteById(index);
            res.redirect(301, '/home/product');
        };
        this.productService = productService_1.default;
    }
    findIndexById(idPr) {
        let i = -1;
        this.productService.getAll().forEach((value, index, array) => {
            if (value.id === idPr) {
                i = index;
            }
        });
        return i;
    }
}
exports.default = new ProductControler();
//# sourceMappingURL=productControler.js.map