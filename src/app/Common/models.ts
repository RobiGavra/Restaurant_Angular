export interface Reservation {
  id: number;
  dateTime: Date;
  tableNo: number;
  persNo: number;
  customerDetails: Person;
}

export interface Food {
  id: number;
  name: string;
  ingredients: string;
  category: FoodCategory;
  quantity: number;
  price: number;
  imageName: string;
  imagePath: string;
}

export interface Employee {
  id: number;
  function: EmployeeFunction;
  startDate: Date;
  salary: number;
  personDetails: Person;
}

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age: number;
  addressDetails: Address;
}

export interface Address {
  id: number;
  region: string;
  city: string;
  street: string;
  number: number;
  apartment: number;
  getFullAddress: string;
}

export enum EmployeeFunction {
  Chef = 1,
  Manager = 2,
  Waiter = 3
}

export enum FoodCategory {
  Starter = 1,
  MainCourse = 2,
  Soup = 3
}
