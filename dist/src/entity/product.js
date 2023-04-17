"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProdcutSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String
});
const Product = (0, mongoose_1.model)('Product', ProdcutSchema);
exports.Product = Product;
//# sourceMappingURL=product.js.map