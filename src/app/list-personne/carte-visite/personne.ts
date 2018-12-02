export class Personne {
  private _name: string;
  private _position: string;
  private _description: string;
  private _logo: string;
  private _jobDescription: string;
  private _followerNbre: number;
  private _followingNbre: number;
  private _projectNbre: number;
  private _fbURL: string;
  private _twitterURL: string;
  private _gmailURL: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }

  get jobDescription(): string {
    return this._jobDescription;
  }

  set jobDescription(value: string) {
    this._jobDescription = value;
  }

  get followerNbre(): number {
    return this._followerNbre;
  }

  set followerNbre(value: number) {
    this._followerNbre = value;
  }

  get followingNbre(): number {
    return this._followingNbre;
  }

  set followingNbre(value: number) {
    this._followingNbre = value;
  }

  get projectNbre(): number {
    return this._projectNbre;
  }

  set projectNbre(value: number) {
    this._projectNbre = value;
  }

  get fbURL(): string {
    return this._fbURL;
  }

  set fbURL(value: string) {
    this._fbURL = value;
  }

  get twitterURL(): string {
    return this._twitterURL;
  }

  set twitterURL(value: string) {
    this._twitterURL = value;
  }

  get gmailURL(): string {
    return this._gmailURL;
  }

  set gmailURL(value: string) {
    this._gmailURL = value;
  }
}
