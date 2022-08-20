import { ROLES, User } from "./01-enums"

const currentUser: User = {
  username: "Luis",
  role: ROLES.USER
}

const checkAdminRole = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  } else {
    return false
  }
}
console.log("checkAdminRole", checkAdminRole());

const checkRole = (...roles: string[]): boolean => {
  return roles.includes(currentUser.role) ? true : false
}
console.log("checkRole", checkRole(ROLES.ADMIN, ROLES.OWNER, ROLES.USER));
