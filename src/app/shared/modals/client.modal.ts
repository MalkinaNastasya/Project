export class User {
    public id: number;
    public name: string;
    public sername: string;
    public phone: string;
    public email: string;
    public role: string;
    public login: string;
    public password: string;
    constructor(
      id: number,
      name: string,
      sername: string,
      phone: string,
      email: string,
      role: string,
      login: string,
      password: string
    ) {
      this.id = id;
      this.name = name;
      this.sername = sername;
      this.phone = phone;
      this.email = email;
      this.role = role;
      this.login = login;
      this.password = password;
    }
  }
  