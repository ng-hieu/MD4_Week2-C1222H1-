import { Request, Response } from 'express';
declare class ProductControler {
    private productService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    showFormAdd: (req: Request, res: Response) => void;
    addProduct: (req: Request, res: Response) => void;
    checkDeleteProduct: (req: Request, res: Response) => void;
    findIndexById(idPr: any): number;
    deletePr: (req: Request, res: Response) => void;
}
declare const _default: ProductControler;
export default _default;
