export class User {
  userName: string;
  password: string;

  constructor(
    options: {
      userName?: string
      password?: string
    } = {}
  ) {
    this.userName = options.userName;
    this.password = options.password;
  }
}
