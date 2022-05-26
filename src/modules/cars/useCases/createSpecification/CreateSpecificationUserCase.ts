import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";

interface IResquest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUserCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IResquest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError(" Specification Already Exist!");
    }

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUserCase };
