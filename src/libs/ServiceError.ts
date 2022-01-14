export class ServiceError extends Error {
  public status: number;
  public message: string;
  public errors?: string[];

  constructor(status: number, message: string, errors?: string[]) {
    super(message);

    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}
