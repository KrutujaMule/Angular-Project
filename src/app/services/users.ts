export class loginUser{
  constructor(
    public username:string,
    public pass:string
  ){}
}

export class signUpUser {
  constructor(
    public fullname:string,
    public email:string,
    public mobilenumber:string,
    public password:string,
    public agree:boolean
  ) {}
}


export interface Users {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Raw {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Users[];
  support: {
    url: string;
    text: string;
  };
}

export interface createUser {
  firstname: '';
  middlename: '';
  lastname: '';
  email: '';
  phonenumber: '';
  dob: '';
}
