import { timingSafeEqual } from "crypto";

export interface CRUD<T> {
  fetch(): void;
  create(val: any): void;
  editRow(val: number): void;
  deleteRow(val: number): void;
}
export enum ROLES {
  DEVELOPER,
  QA,
  DevOps
}
export class Employee {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phoneno: any;
  role: ROLES;
  address: string;
  id:number;
  constructor(fname:string,mname:string,lname:string,email:string,phone:number,role:ROLES,address:string)
  {
    this.firstname = fname;
    this.middlename = mname;
    this.lastname = lname;
    this.email= email;
    this.phoneno=phone;
    this.role=  role;
    this.address = address;

  }
}
export class fetchData {
  async fetch1() {
    let response = await fetch("http://localhost:3000/class2");
    let data = await response.json();
    return(data);
  }
} 

