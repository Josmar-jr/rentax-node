import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private categoriesRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.categoriesRepository.findName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
