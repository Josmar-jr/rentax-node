import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { file } = request;

    if (!file) {
      throw new Error("File is incorrect");
    }

    this.importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
