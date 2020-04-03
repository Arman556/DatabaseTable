
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
  fname: number;
  address: string;
  id:number;
  customer_id:number;
  constructor(fsname:string,mname:string,lname:string,email:string,phone:number,fname:number,address:string,customer_id:number)
  {
    this.firstname = fsname;
    this.middlename = mname;
    this.lastname = lname;
    this.email= email;
    this.phoneno=phone;
    this.fname=  fname;
    this.address = address;
    this.customer_id=customer_id;
  }
}
export class fetchData {
  async fetch1() {
    let response = await fetch("http://localhost:3000/fetchUserData");
    let data = await response.json();
    return(data);
  }
}
  export class ids {
    async fetchids(){
      let response=await fetch('http://localhost:3000/getUserid');
      let data=await response.json();
      return data;
    }
  } 

