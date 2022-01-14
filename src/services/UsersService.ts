import { prisma } from "../database";
import { ServiceError } from "../libs/ServiceError";
import { CreateUser, User } from "../typings";
import { createUserValidator } from "../validators/CreateUserValidator";
import { updateUserValidator } from "../validators/UpdateUserValidator";

class UsersService {
  public async createUser(data: CreateUser): Promise<User | ServiceError> {
    const validate = await createUserValidator.validate(data);

    if (validate instanceof Error) {
      return new ServiceError(400, validate.message);
    }

    const user = await prisma.user.create({
      data: validate,
    });

    return user;
  }

  public async getUser(id: string): Promise<User | ServiceError> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return new ServiceError(404, "User not found");
    }

    return user;
  }

  public async getUsers(): Promise<User[] | ServiceError> {
    const users = await prisma.user.findMany();

    return users;
  }

  public async updateUser(
    id: string,
    data: CreateUser
  ): Promise<User | ServiceError> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return new ServiceError(404, "User not found");
    }

    const validate = await updateUserValidator.validate(data);

    if (validate instanceof Error) {
      return new ServiceError(400, validate.message);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: validate,
    });

    return updatedUser;
  }

  public async deleteUser(id: string): Promise<User | ServiceError> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return new ServiceError(404, "User not found");
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return deletedUser;
  }
}

export const usersService = new UsersService();
