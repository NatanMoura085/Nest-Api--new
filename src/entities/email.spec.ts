import { Email } from './email';

it('it should create email', () => {
  const email = new Email('mour');
  expect(email).toBeTruthy();
});
