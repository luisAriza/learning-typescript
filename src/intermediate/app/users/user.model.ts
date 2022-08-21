export enum ROLES {
  ADMIN = "admin",
  USER = "user",
  OWNER = "owner"
}

export interface User {
  id: number | string;
  username: string;
  role: ROLES;
}
