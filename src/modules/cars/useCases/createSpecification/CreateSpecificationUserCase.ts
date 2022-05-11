import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

interface IResquest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUserCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IResquest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError(" Specification Already Exist!");
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUserCase };
