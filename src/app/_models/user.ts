export class User {
    _id: string;
    username: string;
    password: string;
    authentificator : string;
    firtName: string;
    lastName : string;
    fullName : string;
    email : string;
    roles: string[];


    constructor(_id : string,
                username : string,
                authentificator : string,
                fistName: string,
                lastName : string,
                fullName : string,
                email: string,
                roles :string[]

    ){

      this._id= _id;
      this.username =username;
      this.firtName = fistName;
      this.lastName = lastName;
      this.fullName = fullName;
      this.email = email;
      this.roles = roles;

    }
}
