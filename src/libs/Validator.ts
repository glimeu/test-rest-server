import { ObjectSchema, ValidationError } from "yup";

export class Validator<T> {
  constructor(private schema: ObjectSchema<any>) {}

  public async validate(data: any): Promise<T | ValidationError> {
    return new Promise<T | ValidationError>((resolve, reject) => {
      this.schema
        .validate(data, { abortEarly: false })
        .then(() => {
          const castedData = this.schema.cast(data);
          resolve(castedData);
        })
        .catch((error) => {
          if (error instanceof ValidationError) return resolve(error.inner[0]);

          reject(error);
        });
    });
  }
}
