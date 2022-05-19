import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  findByName(name: string): Promise<Car>;
  list(): Promise<Car[]>;

  // Is same a  create({ name, description, ...  }:
  create(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository, ICreateCarDTO };
