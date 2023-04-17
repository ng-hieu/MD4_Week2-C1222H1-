"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./src/router/router"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const DB_URL = 'mongodb://127.0.0.1:27017/mongoDemo';
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected Success!'))
    .catch(error => console.log('DB connection error:', error.message));
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express_1.default.static('./public'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/home', router_1.default);
app.listen(3000, () => {
    console.log('Server 3000 is running');
});
//# sourceMappingURL=index.js.map