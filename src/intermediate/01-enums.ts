export enum ROLES {
  ADMIN = "admin",
  USER = "user",
  OWNER = "owner"
}

export type User = {
  username: string;
  role: ROLES;
}

const luisUser: User = {
  username: "Luis Ariza",
  role: ROLES.ADMIN
};

console.log("luisUser", luisUser);
