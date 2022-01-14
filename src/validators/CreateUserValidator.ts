import * as yup from "yup";

import { Validator } from "../libs/Validator";
import { CreateUser } from "../typings";

class CreateUserValidator extends Validator<CreateUser> {
  constructor() {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    super(schema);
  }
}

export const createUserValidator = new CreateUserValidator();
