/* eslint-disable no-underscore-dangle */
export class User{
  constructor(
    public id?: string,
    public email?: string ,
    //private _token: string,
    public token?: string,
    //private tokenExpirationDate: Date
    public tokenExpirationDate?: Date,
    public fname?: any,
    public lname?: string,
    public phone?: string,
    public username?: string,
    public address?: string
    ){}

    // get token(){
    //   if(!this.tokenExpirationDate || this.tokenExpirationDate<= new Date())
    //   {
    //     return null;
    //   }
    //   return this._token;
   // }
}
