import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  

  handle(request: Request, response: Response): Response {
    const listSpecificationUseCase = container.resolve(ListSpecificationUseCase);
    const all = listSpecificationUseCase.execute();
    return response.json(all);
  }
}

export { ListSpecificationController };
