

export  class Personne {

private _id: number;


private _name: String;


private _surname: String;

private _datebirth: Date;


private _Adresse: String;

private _cin: String ;


private _CodePostal: String;

private _password: String;


private _ville: String;

private _username: String;


private _role: String;



  constructor(name: String, surname: String, datebirth: Date,
              Adresse: String, cin: String, CodePostal: String,
              password: String, username: String) {
    this._name = name;
    this._surname = surname;
    this._datebirth = datebirth;
    this._Adresse = Adresse;
    this._cin = cin;
    this._CodePostal = CodePostal;
    this._password = password;
    this._username = username;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get surname(): String {
    return this._surname;
  }

  set surname(value: String) {
    this._surname = value;
  }

  get datebirth(): Date {
    return this._datebirth;
  }

  set datebirth(value: Date) {
    this._datebirth = value;
  }

  get Adresse(): String {
    return this._Adresse;
  }

  set Adresse(value: String) {
    this._Adresse = value;
  }

  get cin(): String {
    return this._cin;
  }

  set cin(value: String) {
    this._cin = value;
  }

  get CodePostal(): String {
    return this._CodePostal;
  }

  set CodePostal(value: String) {
    this._CodePostal = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get ville(): String {
    return this._ville;
  }

  set ville(value: String) {
    this._ville = value;
  }

  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get role(): String {
    return this._role;
  }

  set role(value: String) {
    this._role = value;
  }
}
