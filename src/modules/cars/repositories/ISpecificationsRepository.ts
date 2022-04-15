import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findName(name: string): Specification | undefined;
  // list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
