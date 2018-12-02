
export class Book {
  static get bookCount(): number {
    return this._bookCount;
  }

  get imgURL(): string {
    return this._imgURL;
  }

  set imgURL(value: string) {
    this._imgURL = value;
  }
  private static _bookCount = 0;
  private _title: string;
  private _id: number;
  private _datePub: string;
  private _description: string;
  private _writer: string;
  private _price: number;
  private _imgURL: string;

  constructor(title: string, datePub: string, description: string,
              writer: string, price: number, available: number,
              categories: string[],
              imgURL: string) {
    this._title = title;
    this._id = Book._bookCount++;
    this._datePub = datePub;
    this._description = description;
    this._writer = writer;
    this._price = price;
    this._available = available;
    this._categories = categories;
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

  get writer(): string {
    return this._writer;
  }

  set writer(value: string) {
    this._writer = value;
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

  get categories(): string[] {
    return this._categories;
  }

  set categories(value: string[]) {
    this._categories = value;
  }

  private _available: number;
  private _categories: string [];

}
