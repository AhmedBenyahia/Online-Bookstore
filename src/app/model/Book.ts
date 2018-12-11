
export class Book {
  static get bookCount(): number {
    return this._bookCount;
  }

  get imgURL(): string {
    return this._imgUrl;
  }

  set imgURL(value: string) {
    this._imgUrl = value;
  }
  private static _bookCount = 0;
  private _title: string;
  private _id: number;
  private _datePub: string;
  private _description: string;
  private _author: string;
  private _price: number;
  private _imgUrl: string;
  private _available: number;
  private _tag: string [];

  constructor(title: string, datePub: string, description: string,
              author: string, price: number, available: number,
              tag: string[],
              imgUrl: string) {
    this._title = title;
    this._id = Book._bookCount++;
    this._datePub = datePub;
    this._description = description;
    this._author = author;
    this._price = price;
    this._available = available;
    this._tag = tag;
    this._imgUrl = imgUrl;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  set imgUrl(value: string) {
    this._imgUrl = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get datePub(): string {
    return this._datePub;
  }

  set datePub(value: string) {
    this._datePub = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get available(): number {
    return this._available;
  }

  set available(value: number) {
    this._available = value;
  }

  get tag(): string[] {
    return this._tag;
  }

  set tag(value: string[]) {
    this._tag = value;
  }



}
