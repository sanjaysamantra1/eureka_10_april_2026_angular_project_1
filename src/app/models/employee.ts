export class Employee { // Employee Model
  id: number | undefined;
  firstName!: string;
  lastName!: string;
  sal!: number;
  gender!: string;
  email!:string;

  constructor(data: any) {
    Object.assign(this, data);
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  yearlySalary(): number {
    return 12 * this.sal;
  }
}
