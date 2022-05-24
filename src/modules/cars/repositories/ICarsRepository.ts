import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  findByLicensePlate(license_plate: string): Promise<Car>;
  list(): Promise<Car[]>;
  findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]>;

  // Is same a  create({ name, description, ...  }:
  create(data: ICreateCarDTO): Promise<Car>;
}

export { ICarsRepository, ICreateCarDTO };
