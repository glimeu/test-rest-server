import * as yup from "yup";

import { Validator } from "../libs/Validator";
import { UpdateUser } from "../typings";

class UpdateUserValidator extends Validator<UpdateUser> {
  constructor() {
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      password: yup.string(),
    });

    super(schema);
  }
}

export const updateUserValidator = new UpdateUserValidator();
