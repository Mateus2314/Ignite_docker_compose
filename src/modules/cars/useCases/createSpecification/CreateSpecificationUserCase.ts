import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IResquest {
  name: string;
  description: string;
}

@injectable()

class CreateSpecificationUserCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository) {}

  async execute({ name, description }: IResquest): Promise<void> {
    
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(" Specification Already Exist!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUserCase };