import { Request, Response } from "express";

import { usersService } from "../services/UsersService";
import { ServiceError } from "../libs/ServiceError";

export default {
  async createUser(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const result = await usersService.createUser({ name, email, password });

    if (result instanceof ServiceError) {
      return response
        .status(result.status)
        .json({ error: result.message, errors: result.errors });
    }

    return response.status(201).json(result);
  },

  async getUser(request: Request, response: Response) {
    const { id } = request.params;

    const result = await usersService.getUser(id);

    if (result instanceof ServiceError) {
      return response.status(result.status).json({ error: result.message });
    }

    return response.status(200).json(result);
  },

  async getUsers(request: Request, response: Response) {
    const result = await usersService.getUsers();

    if (result instanceof ServiceError) {
      return response.status(result.status).json({ error: result.message });
    }

    return response.status(200).json(result);
  },

  async updateUser(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const result = await usersService.updateUser(id, { name, email, password });

    if (result instanceof ServiceError) {
      return response.status(result.status).json({ error: result.message });
    }

    return response.status(200).json(result);
  },

  async deleteUser(request: Request, response: Response) {
    const { id } = request.params;

    const result = await usersService.deleteUser(id);

    if (result instanceof ServiceError) {
      return response.status(result.status).json({ error: result.message });
    }

    return response.status(200).json(result);
  },
};
