import { ROLES } from "../constants";

export const hasRole = (user, role) => user?.role === role;

export const isAdmin = (user) => hasRole(user, ROLES.ADMIN);

export const assignRole = (email) =>
  email.includes("admin") ? ROLES.ADMIN : ROLES.USER;
