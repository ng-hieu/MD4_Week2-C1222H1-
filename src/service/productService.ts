import {Product} from "../entity/product";

class ProductService {
    constructor() {
    }

    getAll = async () => {
        let products = await Product.find();
        console.log(products)
        return products;
    }
    add = async (product) => {
        await Product.create(product)
    }
    deleteById = (index) => {

    }
}

export default new ProductService();
