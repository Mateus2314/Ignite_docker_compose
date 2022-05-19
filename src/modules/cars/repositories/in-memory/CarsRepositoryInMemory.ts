import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  findByName(name: string): Promise<Car> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  cars: Car[];
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    name,
    license_plate,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();
    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      name,
      license_plate,
    });

    this.cars.push(car);
  }
}
export { CarsRepositoryInMemory };
