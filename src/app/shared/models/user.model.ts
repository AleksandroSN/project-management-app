export interface User {
  login: string;
  password: string;
}

export interface UserWithName extends User {
  name: string;
}
export interface UserWithId {
  id?: string;
  name?: string;
  login: string;
}
