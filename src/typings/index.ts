export { User } from "./users";
export { CreateUser } from "./users";
export { UpdateUser } from "./users";

export type Pagination<T> = {
  page: number;
  pages: number;
  total: number;
  limit: number;
  data: T[];
};
