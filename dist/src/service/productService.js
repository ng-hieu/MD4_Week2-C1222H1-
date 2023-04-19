"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await product_1.Product.find();
            return products;
        };
        this.addPr = async (product) => {
            await product_1.Product.create(product);
        };
        this.deleteById = async (id) => {
            await product_1.Product.deleteOne({ _id: id });
        };
        this.showProductEdit = async (id) => {
            console.log('check showProductEdit');
            let product = await product_1.Product.find({ _id: id });
            return product[0];
        };
        this.productEdit = async (id, productAfUpdate) => {
            await product_1.Product.updateOne({ _id: id }, { $set: { name: `${productAfUpdate.name}`, price: productAfUpdate.price, quantity: productAfUpdate.quantity, image: `${productAfUpdate.image}` } });
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map