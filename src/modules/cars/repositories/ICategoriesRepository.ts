import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findName(name: string): Category | undefined;
}

export { ICategoriesRepository, ICreateCategoryDTO };
