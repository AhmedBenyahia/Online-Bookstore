
export interface Order {
   id: number;
   amount: number ;
   booksIds: number[];
   confirmation: boolean;
   fullAddress: string;
  telephoneNumber: string;
  totalCost: number;
}
//
// export class OrderEntity implements Order {
//
//   private amount = 0;
//   private booksIds = [];
//   private confirmation = false;
//   private fullAddress = '';
//   private id: number = undefined;
//   private telephoneNumber = '';
//   private totalCost = 0;
//
//   constructor(amount: number, booksIds: number, confirmation: boolean,
//               fullAddress: string, telephoneNumber: string, totalCost: number) {
//     this.amount = amount;
//     this.booksIds = booksIds;
//     this.confirmation = confirmation;
//     this.fullAddress = fullAddress;
//     this.telephoneNumber = telephoneNumber;
//     this.totalCost = totalCost;
//   }
//
//   get totalCost(): number {
//     return this.totalCost;
//   }
//
//   set totalCost(value: number) {
//     this.totalCost = value;
//   }
//
//   get amount(): number {
//     return this.amount;
//   }
//
//   set amount(value: number) {
//     this.amount = value;
//   }
//
//   get booksIds(): number {
//     return this.booksIds;
//   }
//
//   set booksIds(value: number) {
//     this.booksIds = value;
//   }
//
//   get confirmation(): boolean {
//     return this.confirmation;
//   }
//
//   set confirmation(value: boolean) {
//     this.confirmation = value;
//   }
//
//   get fullAddress(): string {
//     return this.fullAddress;
//   }
//
//   set fullAddress(value: string) {
//     this.fullAddress = value;
//   }
//
//   get telephoneNumber(): string {
//     return this.telephoneNumber;
//   }
//
//   set telephoneNumber(value: string) {
//     this.telephoneNumber = value;
//   }
// }
