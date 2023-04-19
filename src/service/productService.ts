import {Product} from "../entity/product";
import mongoose from "mongoose";

class ProductService {
    constructor() {
    }

    getAll = async () => {
        let products = await Product.find();
        return products;
    }
    addPr = async (product) => {
        await Product.create(product)
    }
    deleteById = async (id) => {
        await Product.deleteOne({_id: id});
    }
    showProductEdit = async (id) => {
        console.log('check showProductEdit')
        let product = await Product.find({_id: id});
        // console.log(typeof product)
        // console.log(product)
        return product[0];
    }
    productEdit = async (id, productAfUpdate)=>{
        await Product.updateOne({_id: id}, {$set: {name: `${productAfUpdate.name}`, price: productAfUpdate.price, quantity: productAfUpdate.quantity, image: `${productAfUpdate.image}`}})
    }
}

export default new ProductService();
