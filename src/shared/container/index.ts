import { container } from "tsyringe";

import "@shared/container/providers";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepositoriey";
import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

// ISpecificationRepository
container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

// IUserRepository
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

// ICarRepository
container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

// ICarImage
container.registerSingleton<ICarsImagesRepository>(
  "CarsImagesRepository",
  CarsImagesRepository
);

// IRentalRepository
container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);
