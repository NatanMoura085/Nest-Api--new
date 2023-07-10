import { IsNotEmpty, Length } from 'class-validator';

export class createDTo {
  @Length(5, 248)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;
}
