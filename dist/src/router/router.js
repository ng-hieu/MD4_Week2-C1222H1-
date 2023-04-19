"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControler_1 = __importDefault(require("../controller/productControler"));
const router = (0, express_1.Router)();
router.get('/product', productControler_1.default.findAll);
router.get('/create', productControler_1.default.showFormAdd);
router.post('/create', productControler_1.default.addProduct);
router.get('/deletePr/:id', productControler_1.default.deletePr);
router.get('/edit/:id', productControler_1.default.productNeedEdit);
router.post('/edit/:id', productControler_1.default.productAfEdit);
exports.default = router;
//# sourceMappingURL=router.js.map