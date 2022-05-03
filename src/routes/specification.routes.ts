import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
// import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createSpecificationController.handle );

// specificationsRoutes.get("/", (request, response) => {
//   return listSpecificationController.handle(request, response);
// });

export { specificationsRoutes };
