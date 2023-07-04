export class Email {
  private readonly email: string;

  get value(): string {
    return this.email;
  }

  private validateEmail(email: string): boolean {
    return email.length > 10 && email.length < 20;
  }

  constructor(email: string) {
    const Isvalidate = this.validateEmail(email);

    if (!Isvalidate) {
      throw new Error('email length error');
    }
    this.email = email;
  }
}
