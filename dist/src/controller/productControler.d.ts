import { Request, Response } from 'express';
declare class ProductControler {
    private productService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    showFormAdd: (req: Request, res: Response) => void;
    addProduct: (req: Request, res: Response) => void;
    deletePr: (req: Request, res: Response) => void;
    productNeedEdit: (req: Request, res: Response) => Promise<void>;
    productAfEdit: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductControler;
export default _default;
