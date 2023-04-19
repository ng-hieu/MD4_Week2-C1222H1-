import mongoose from "mongoose";
declare class ProductService {
    constructor();
    getAll: () => Promise<(mongoose.Document<unknown, {}, import("../entity/product").IProduct> & Omit<import("../entity/product").IProduct & {
        _id: mongoose.Types.ObjectId;
    }, never>)[]>;
    addPr: (product: any) => Promise<void>;
    deleteById: (id: any) => Promise<void>;
    showProductEdit: (id: any) => Promise<mongoose.Document<unknown, {}, import("../entity/product").IProduct> & Omit<import("../entity/product").IProduct & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    productEdit: (id: any, productAfUpdate: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
