/* eslint-disable functional/no-this-expression, functional/no-class, functional/no-expression-statement */
export default class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DatabaseValidation';
  }
}
