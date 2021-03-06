import { IProduct, ProductModificationStatus } from '../models/product.interface';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CHANGE_PRODUCT_AMOUNT = 'CHANGE_PRODUCT_AMOUNT';
export const CHANGE_PRODUCT_PENDING_EDIT = 'CHANGE_PRODUCT_PENDING_EDIT';
export const CLEAR_PRODUCT_PENDING_EDIT = 'CLEAR_PRODUCT_PENDING_EDIT';
export const SET_MODIFICATION_STATE = 'SET_MODIFICATION_STATE';

export function addProduct(product: IProduct): IAddProductActionType {
  return { type: ADD_PRODUCT, product };
}

export function editProduct(product: IProduct): IEditProductActionType {
  return { type: EDIT_PRODUCT, product };
}

export function removeProduct(id: number): IRemoveProductActionType {
  return { type: REMOVE_PRODUCT, id };
}

export function changeProductAmount(id: number, amount: number): IChangeProductAmountType {
  return { type: CHANGE_PRODUCT_AMOUNT, id, amount };
}

export function changeSelectedProduct(product: IProduct): IChangeSelectedProductActionType {
  return { type: CHANGE_PRODUCT_PENDING_EDIT, product };
}

export function clearSelectedProduct(): IClearSelectedProductActionType {
  return { type: CLEAR_PRODUCT_PENDING_EDIT };
}

export function setModificationState(value: ProductModificationStatus): ISetModificationStateActionType {
  return { type: SET_MODIFICATION_STATE, value };
}

interface IAddProductActionType {
  type: string;
  product: IProduct;
}
interface IEditProductActionType {
  type: string;
  product: IProduct;
}
interface IRemoveProductActionType {
  type: string;
  id: number;
}
interface IChangeSelectedProductActionType {
  type: string;
  product: IProduct;
}
interface IClearSelectedProductActionType {
  type: string;
}
interface ISetModificationStateActionType {
  type: string;
  value: ProductModificationStatus;
}
interface IChangeProductAmountType {
  type: string;
  id: number;
  amount: number;
}
