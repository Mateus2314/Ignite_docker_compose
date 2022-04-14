import { Request, Response } from "express";

import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationUseCase.execute();
    return response.json(all);
  }
}

export { ListSpecificationController };
