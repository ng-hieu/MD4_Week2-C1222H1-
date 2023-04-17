import {Schema, model} from 'mongoose'
export interface IProduct {
    name?: string,
    price?: number,
    quantity?: number,
    image?: string
}

const ProdcutSchema = new Schema<IProduct>({
        name: String,
        price: Number,
        quantity: Number,
        image: String
    }
)

const Product = model('Product', ProdcutSchema);
export {Product}