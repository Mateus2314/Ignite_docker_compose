import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListCategoryController } from "../listCategories/ListCategoriesController";
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListCategoriesUseCase(
  specificationRepository
);
const listSpecificationController = new ListCategoryController(
  listSpecificationUseCase
);

export { listSpecificationController };
