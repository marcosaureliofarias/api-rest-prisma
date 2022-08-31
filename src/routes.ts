import { Router } from "express";
import { CreateCategoryController } from "./controllers/createCategoryController";
import { CreateProductCategoryController } from "./controllers/createProductCategoryController";
import { CreateProductController } from "./controllers/createProductController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategoryController = new CreateProductCategoryController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", createProductCategoryController.handle);

export {router};