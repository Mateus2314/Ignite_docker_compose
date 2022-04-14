import { Response, Request } from "express";

import { CreateSpecificationUserCase } from "./CreateSpecificationUserCase";

class CreateSpecificationController {
  constructor(
    private createSpecificationUseCase: CreateSpecificationUserCase
  ) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
