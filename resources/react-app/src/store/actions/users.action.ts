import { IUser } from '../models/user.interface';

export const ADD_ADMIN = 'ADD_ADMIN';
export const REMOVE_ADMIN = 'REMOVE_ADMIN';

export function addAdmin(user: IUser): IAddAdminActionType {
  return { type: ADD_ADMIN, user };
}

export function removeAdmin(user: IUser): IRemoveAdminActionType {
  return { type: REMOVE_ADMIN, user };
}

interface IAddAdminActionType {
  type: string;
  user: IUser;
}
interface IRemoveAdminActionType {
  type: string;
  user: IUser;
}
