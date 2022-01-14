export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUser = Omit<User, "id" | "createdAt" | "updatedAt">;

export type UpdateUser = Partial<Omit<User, "id" | "createdAt" | "updatedAt">>;
