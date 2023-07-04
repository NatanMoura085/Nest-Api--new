import { Email } from './email';

export interface usuariosProps {
  name: string;
  email: Email;
}

export class Usuarios {
  private props: usuariosProps;

  constructor(props: usuariosProps) {
    this.props = props;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: Email) {
    this.props.email = email;
  }

  public get email(): Email {
    return this.props.email;
  }
}
